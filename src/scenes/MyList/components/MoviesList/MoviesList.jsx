import PropTypes from 'prop-types'
import React from 'react'

import { Results } from 'components'

import { ListEmpty } from '..'

export const MY_LIST = 'MyList'

const MoviesList = ({ movies }) => {
  if (movies.length === 0) return <ListEmpty />
    
  return <Results movies={movies} name={MY_LIST} />
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviesList
