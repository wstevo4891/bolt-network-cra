// app/javascript/main/scenes/Search/components/SearchResults.jsx

import React, { Component } from 'react'
import queryString from 'query-string'

// Services
import API from './services/API'

// Styles
import './styles/index.scss'

// Components
import SearchResults from './components/SearchResults'

export default class Search extends Component {
  state = {
    query: null,
    genres: null,
    movies: null
  }
  
  _mounted = false

  UNSAFE_componentWillReceiveProps(nextProps) {
    const query = this.parseQuery(nextProps.location.search)

    if (query && query !== '') {
      if (query === this.state.query) return

      this.fetchResults(query)
    }
  }

  render() {
    const { genres, movies, query } = this.state

    if (genres === null && movies === null) return null

    return(
      <SearchResults
        genres={genres}
        movies={movies}
        query={query}
        slideLength={this.props.slideLength}
      />
    )
  }

  componentDidMount() {
    this._mounted = true

    const query = this.parseQuery(this.props.location.search)

    this.fetchResults(query)
  }

  componentWillUnmount() {
    this._mounted = false
  }

  parseQuery = (search) => {
    const q = queryString.parse(search).q
    return decodeURIComponent(q)
  }

  fetchResults = (query) => {
    API.search.get(query)
      .then(response => {
        // =====================================================
        // Prevent this.setState() if component is unmounted
        // =====================================================
        if (this._mounted === false) return

        this.setState({
          query: query,
          genres: response.data.genres,
          movies: response.data.movies
        })
      })
      .catch(error => {
        console.error('Error in Search.fetchResults()')
        console.error(error);
      })
  }
}
