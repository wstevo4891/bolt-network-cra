import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import API from './services/API'

import './styles/App.scss'

import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Footer from './components/Footer'

class App extends Component {
  state = {
    genres: null,
    genresIndex: null,
    moviesIndex: null,
    searchResults: null
  }

  render() {
    const { genres, genresIndex, moviesIndex, searchResults } = this.state

    if (genres === null) return null

    return (
      <Router>
        <MainContainer>
          {slideLength => (
            <>
              <Navbar
                genresIndex={genresIndex}
                fetchResults={this.fetchSearchResults}
              />

              <Routes
                genres={genres}
                genresIndex={genresIndex}
                moviesIndex={moviesIndex}
                slideLength={slideLength}
                searchResults={searchResults}
              />
            </>
          )}
        </MainContainer>

        <Footer />
      </Router>
    )
  }

  componentDidMount() {
    let moviesIndex = sessionStorage.getItem('MoviesIndex')

    if (moviesIndex) {
      moviesIndex = JSON.parse(moviesIndex)

      const genres = Object.keys(moviesIndex)

      this.setState({
        genres: genres,
        genresIndex: this.genresIndex(genres),
        moviesIndex: moviesIndex
      })

    } else {
      this.fetchMoviesIndex()
    }
  }

  genresIndex = (genres) => {
    const index = {}

    for (let genre of genres) {
      let slug = genre.toLowerCase()

      index[slug] = { text: genre, url: `/genres/${slug}` }
    }

    return index
  }

  fetchMoviesIndex = async () => {
    try {
      const data = await API.moviesIndex.get()

      sessionStorage.setItem('MoviesIndex', JSON.stringify(data))

      const genres = Object.keys(data)

      this.setState({
        genres: genres,
        genresIndex: this.genresIndex(genres),
        moviesIndex: data
      })

    } catch(error) {
      console.error('Error in App.fetchMoviesIndex()')
      console.error(error)
    }
  }

  fetchSearchResults = async (query) => {
    try {
      if (!query || query === '') return

      const data = await API.search.get(query)

      // Prevent this.setState() if component is unmounted
      // if (this._mounted === false) return

      this.setState({
        searchResults: data
      })

    } catch(error) {
      console.error('Error in App.fetchSearchResults()')
      console.error(error)
    }
  }

  fetchMoviesIndexXHR = () => {
    try {
      const xhr = new XMLHttpRequest()

      xhr.addEventListener('load', () => {
        console.log('XHR Response')
        console.log(xhr.responseText)

        sessionStorage.setItem(
          'MoviesIndex',
          xhr.responseText
        )

        const data = JSON.parse(xhr.responseText)

        const genres = Object.keys(data)

        this.setState({
          genres: genres,
          genresIndex: this.genresIndex(genres),
          moviesIndex: data
        })
      })

      xhr.open('GET', 'http://localhost:3001/api/v1/movies-index')

      xhr.send()

    } catch(error) {
      console.error('Error in App.fetchMoviesIndexXHR()')
      console.error(error)
    }
  }
}

export default App;
