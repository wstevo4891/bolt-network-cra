import PropTypes from 'prop-types'
import React, { useState } from 'react'

// Components
import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

export default function Recent({ fetchMovies }) {
  const [movies, setMovies] = useState(null)

  if (movies === null) {
    const results = fetchMovies()

    setMovies(results)
  }

  return (
    <DisplayContainer>
      <TitleRow title="Recently Added" />
      <Results name="Recent" movies={movies} />
    </DisplayContainer>
  )
}

Recent.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
}
