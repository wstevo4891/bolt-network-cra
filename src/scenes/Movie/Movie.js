import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

import { DisplayContainer, TitleRow } from 'components'
import MoviePage from './MoviePage'

const Movie = ({ fetchMovie, movie, movieId }) => {
  useEffect(() => {
    if (movie === undefined) {
      fetchMovie(movieId)
    }
  })

  if (movie === undefined) return null

  return(
    <DisplayContainer>
      <TitleRow title={movie.title} />
      <MoviePage movie={movie} />
    </DisplayContainer>
  )
}

Movie.propTypes = {
  fetchMovie: PropTypes.func.isRequired,
  movie: PropTypes.object,
  movieId: PropTypes.number.isRequired,
}

Movie.defaultProps = {
  movie: undefined
}
