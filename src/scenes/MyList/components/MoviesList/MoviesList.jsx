import PropTypes from 'prop-types'
import React from 'react'

import { MY_LIST } from '../../constants'

import { Results } from 'components'

import { ListEmpty } from '..'

const MoviesList = ({ movies }) => {
  if (movies.length === 0) return <ListEmpty />
    
  return <Results movies={movies} name={MY_LIST} />
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired
}

export default MoviesList
