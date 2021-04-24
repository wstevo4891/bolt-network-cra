import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

import { randomIndex } from './utils'

// Components
import Overlay from '../Overlay'

import { BackgroundImage, MovieContent } from './components'

import './Banner.styles.scss'

const MOVIE_TITLES = [
  'Pirates of the Caribbean: The Curse of the Black Pearl',
  'The Avengers',
  'Skyfall'
]

const Banner = ({ movies }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.bannerMovies.fetch(MOVIE_TITLES))
  }, [dispatch])

  if (movies.length === 0) return null

  const index = randomIndex(MOVIE_TITLES.length)

  const movie = movies[index]

  return (
    <section className="banner">
      <BackgroundImage url={movie.banner}>
        <MovieContent movie={movie} />
        <Overlay />
      </BackgroundImage>
    </section>
  )
}

Banner.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default Banner
