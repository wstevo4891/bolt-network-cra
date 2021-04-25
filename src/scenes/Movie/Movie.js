import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

import { DisplayContainer, TitleRow } from 'components'
import MoviePage from './MoviePage'

const Movie = ({ movie, movieId }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.movies.fetch(movieId))
  }, [dispatch, movieId])

  if (movie === null) return null

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
  movie: null,
}

export default Movie
