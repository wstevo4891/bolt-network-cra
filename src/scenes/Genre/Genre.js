import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

import { selectGenreFromIndex } from './utils'

const Genre = ({ match }) => {
  const genre = useSelector(selectGenreFromIndex(match.params.slug))
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = (genreId) => dispatch(API.genres.fetchMovies(genreId))
    if (genre && genre.movies === undefined) {
      fetchMovies(genre.id)
    }
  }, [dispatch, genre])

  if (genre === null) return null

  return (
    <DisplayContainer>
      <TitleRow title={genre.title} />
      <Results movies={genre.movies} name={genre.title} />
    </DisplayContainer>
  )
}

Genre.propTypes = {
  match: PropTypes.object.isRequired,
}

export default Genre
