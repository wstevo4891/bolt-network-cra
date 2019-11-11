// app/javascript/main/scenes/Recent/components/RecentlyAdded.jsx

import React, { Component } from 'react'

import API from './services/API'
import Results from '../../components/Results'

export default class Recent extends Component {
  state = {
    movies: null
  }

  render() {
    const movies = this.state.movies

    if (movies === null) return null

    return(
      <div className="display-container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 style={{ color: 'white' }}>Recently Added</h1>
          </div>
        </div>

        <Results movies={movies} slideLength={this.props.slideLength} />
      </div>
    )
  }

  componentDidMount() {
    const movies = sessionStorage.getItem('RecentMovies')

    if (movies === null) {
      this.fetchMovies()

    } else {
      this.setState({
        movies: JSON.parse(movies)
      })
    }
  }

  fetchMovies = () => {
    API.movies.recent()
      .then(response => {
        sessionStorage.setItem(
          'RecentMovies',
          JSON.stringify(response.data)
        )

        this.setState({
          movies: response.data
        })
      })
      .catch(error => {
        console.error('Error in Recent.fetchMovies()')
        console.error(error)
      })
  }
}
