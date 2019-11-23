// app/javascript/main/scenes/Recent/components/RecentlyAdded.jsx

import React, { Component } from 'react'

// import API from './services/API'
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

  fetchMovies =  async () => {
    try {
      const URI = 'http://localhost:3001/api/v1/recent-movies'

      const response = await fetch(URI)

      const data = await response.json()

      sessionStorage.setItem(
        'RecentMovies',
        JSON.stringify(data)
      )

      this.setState({
        movies: data
      })

    } catch(error) {
      console.error('Somthing went wrong in Recent.fetchMovies()')
      console.error(error)
    }
  }
}
