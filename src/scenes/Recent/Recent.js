import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

// Components
import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

export default function Recent({ fetchMovies, movies }) {
  useEffect(() => {
    fetchMovies()
  }, [fetchMovies, movies])

  if (movies.length === 0) return null

  return (
    <DisplayContainer>
      <TitleRow title="Recently Added" />
      <Results name="Recent" movies={movies} />
    </DisplayContainer>
  )
}

Recent.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
}
