// Movie Scene stateful component

import React, { Component } from 'react'

import API from './services/API'

import './styles/index.scss'

import MoviePage from './components/MoviePage'

export default class MovieDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }
  }

  componentWillReceiveProps(nextProps) {
    const movieSlug = nextProps.match.params.slug

    this.fetchMovie(movieSlug)
  }

  render() {
    const { movie } = this.state

    if (movie === null) return null

    return(
      <div className="display-container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 style={{ color: 'white' }}>{movie.title}</h1>
          </div>
        </div>

        <MoviePage movie={movie} />
      </div>
    )
  }

  componentDidMount() {
    const movie = this.state.movie

    if (movie !== null) return

    const movieSlug = this.props.match.params.slug

    this.fetchMovie(movieSlug)
  }

  fetchMovie = (movieSlug) => {
    API.movies.show(movieSlug)
      .then(response => {
        // localStorage.setItem(`Movie_${movieId}`, JSON.stringify(response.data))

        this.setState({
          movie: response.data
        })
      })
      .catch(error => {
        console.error('Error in MovieDisplay.fetchMovie()')
        console.error(error)
      })
  }
}
