import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

export default function Recent({ movies }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.movies.fetchRecent())
  }, [dispatch])

  if (movies === []) return null

  return (
    <DisplayContainer>
      <TitleRow title="Recently Added" />
      <Results name="Recent" movies={movies} />
    </DisplayContainer>
  )
}

Recent.propTypes = {
  movies: PropTypes.array.isRequired,
}
