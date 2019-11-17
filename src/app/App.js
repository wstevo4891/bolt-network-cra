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
    moviesIndex: null
  }

  render() {
    const { genres, genresIndex, moviesIndex } = this.state

    if (genres === null) return null

    return (
      <Router>
        <MainContainer>
          {mcState => (
            <>
              <Navbar genresIndex={genresIndex} width={mcState.width} />

              <Routes
                genres={genres}
                genresIndex={genresIndex}
                moviesIndex={moviesIndex}
                slideLength={mcState.slideLength}
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

  // fetchGenres() {
  //   const URI = 'http://localhost:3001/api/v1'

  //   // create a new XMLHttpRequest
  //   const xhr = new XMLHttpRequest()

  //   // get a callback when the server responds
  //   xhr.addEventListener('load', () => {
  //     console.log('XHR Response')
  //     console.log(xhr.responseText)

  //     this.setState({
  //       genres: JSON.parse(xhr.responseText)
  //     })
  //   })

  //   xhr.open('GET', URI + '/genres')

  //   xhr.send()
  // }

  // fetchGenres() {
  //   API.genresXHR.index()
  //     .then(response => {
  //       sessionStorage.setItem('Genres', JSON.stringify(response.data))

  //       this.setState({
  //         genres: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }

  fetchMoviesIndex = async () => {
    try {
      const response = await API.moviesIndex.get()

      sessionStorage.setItem(
        'MoviesIndex',
        JSON.stringify(response.data)
      )

      const genres = Object.keys(response.data)

      this.setState({
        genres: genres,
        genresIndex: this.genresIndex(genres),
        moviesIndex: response.data
      })

    } catch(error) {
      console.error('Error in App.fetchMoviesIndex()')
      console.error(error)
    }
  }
}

export default App;
