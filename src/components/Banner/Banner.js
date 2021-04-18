import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { randomIndex } from './utils'

// Components
import MovieBanner from './MovieBanner'

import './Banner.styles.scss'

const MOVIE_TITLES = [
  'Pirates of the Caribbean: The Curse of the Black Pearl',
  'The Avengers',
  'Skyfall'
]

const Banner = ({ fetchMovies, movies }) => {
  useEffect(() => {
    fetchMovies(MOVIE_TITLES)
  }, [fetchMovies, movies])

  if (movies === null) return null

  const index = randomIndex(MOVIE_TITLES.length)

  const movie = movies[index]

  return (
    <section className="banner">
      <MovieBanner movie={movie} />
    </section>
  )
}

Banner.propTypes = {
  fetchMovies: PropTypes.func.isRequired,
  movies: PropTypes.array
}

Banner.defaultProps = {
  movies: null
}

export default Banner
