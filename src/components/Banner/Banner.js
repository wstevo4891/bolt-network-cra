import React from 'react'

import { useRandomBannerMovie } from './hooks'

import Overlay from '../Overlay'

import { BackgroundImage, MovieContent } from './components'

import './Banner.styles.scss'

const Banner = () => {
  const movie = useRandomBannerMovie()

  if (movie === null) return null

  return (
    <section className="banner">
      <BackgroundImage url={movie.banner}>
        <MovieContent movie={movie} />
        <Overlay />
      </BackgroundImage>
    </section>
  )
}

export default Banner
