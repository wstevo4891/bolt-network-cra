import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

import { DisplayContainer, TitleRow } from 'components'

import { MoviePage } from './components'

const Movie = ({ match }) => {
  const movieId = Number(match.params.id)
  const movie = useSelector(API.movies.selectMovie(movieId))
  const dispatch = useDispatch()

  useEffect(() => {
    if (movie === null) {
      dispatch(API.movies.fetch(movieId))
    }
  })

  if (movie === null) return null

  return(
    <DisplayContainer>
      <TitleRow title={movie.title} />
      <MoviePage movie={movie} />
    </DisplayContainer>
  )
}

Movie.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Movie
