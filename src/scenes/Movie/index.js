// Movie Scene stateful component

import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { DisplayContainer, TitleRow } from 'components'
import MoviePage from './MoviePage'

const API_ROUTE = 'http://localhost:3001/api/v1/movies'

export default class Movie extends Component {
  state = {
    movie: null
  }

  render() {
    const movie = this.state.movie

    if (movie === null) return null

    return(
      <DisplayContainer>
        <TitleRow title={movie.title} />
        <MoviePage movie={movie} />
      </DisplayContainer>
    )
  }

  componentDidMount() {
    this.fetchMovie(this.props.movieID)
  }

  fetchMovie = async (movieID) => {
    try {
      const response = await fetch(`${API_ROUTE}/${movieID}`)

      const data = await response.json()

      this.setState({
        movie: data
      })

    } catch(error) {
      console.error('Error in Movie.fetchMovie()')
      console.error(error)
    }
  }
}

Movie.propTypes = {
  movieID: PropTypes.string.isRequired,
}
