import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

const Genre = ({ fetchGenreMovies, genre }) => {
  useEffect(() => {
    if (genre.movies !== null) return

    fetchGenreMovies(genre.id)
  }, [fetchGenreMovies, genre])

  if (genre.movies === null) return null

  return (
    <DisplayContainer>
      <TitleRow title={genre.title} />
      <Results movies={genre.movies} name={genre.title} />
    </DisplayContainer>
  )
}

Genre.propTypes = {
  fetchGenreMovies: PropTypes.func.isRequired,
  genre: PropTypes.object.isRequired,
}

export default Genre
