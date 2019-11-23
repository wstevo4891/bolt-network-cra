import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers/rootReducer'

import { fetchMoviesIndex } from './actions/moviesIndexActions'

import API from './services/API'

import './styles/App.scss'

import Layout from './components/Layout'

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

// const store = createStore(reducer)

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "DECREMENT" })
store.dispatch({ type: "RESET" })

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
      <Provider store={store}>
        <Layout
          genres={genres}
          genresIndex={genresIndex}
          moviesIndex={moviesIndex}
          searchResults={searchResults}
          fetchResults={this.fetchResults}
        />
      </Provider>
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
