// MovieBanner UI Component

import React from 'react'
import PropTypes from 'prop-types'

// Components
import Overlay from '../Overlay'
import BackgroundImage from './BackgroundImage'
import Logo from './Logo'
import MovieContent from './MovieContent'

import './MovieBanner.styles.scss'

const MovieBanner = ({ movie }) => (
  <BackgroundImage url={movie.banner.url}>
    <div className="slide-info d-none d-sm-block">
      <Logo source={movie.logo.url} title={movie.title} />
      <MovieContent movie={movie} />
    </div>
    <Overlay />
  </BackgroundImage>
)

MovieBanner.propTypes = {
  movie: PropTypes.shape({
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.shape({
      url: PropTypes.string,
    }),
    plot: PropTypes.string,
    rated: PropTypes.string,
    run_time: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  }).isRequired
}

export default MovieBanner
