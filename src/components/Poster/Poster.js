import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import { Overlay } from 'components'

import { PosterControls, PosterControlsWrapper } from './components'

import './Poster.styles.scss'

const Poster = ({ mouseOver, mouseLeave, posterData }) => {
  // const { container, hoverItem, movie, posterImage, slideItem } = posterData
  const { container, movie, posterImage } = posterData

  return (
    <div
      className={`poster-container ${container.className}`}
      data-index={container.slideIndex}
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
      style={container.style}
    >
      <Link to={`/movies/${movie.id}`}>
        <div className="poster" style={posterImage}></div>
        <Overlay />
      </Link>
  
      <PosterControlsWrapper
        hoverItem={container.hoverItem}
        slideItem={container.slideIndex}
      >
        <PosterControls
          hoverItem={container.hoverItem}
          movie={movie}
          slideItem={container.slideIndex}
        />
      </PosterControlsWrapper>
    </div>
  )
}

Poster.propTypes = {
  mouseOver: PropTypes.func.isRequired,
  mouseLeave: PropTypes.func.isRequired,
  posterData: PropTypes.shape({
    container: PropTypes.shape({
      className: PropTypes.string,
      hoverItem: PropTypes.number,
      slideIndex: PropTypes.number,
      style: PropTypes.object,
    }),
    movie: PropTypes.object,
    posterImage: PropTypes.shape({
      backgroundImage: PropTypes.string,
      backgroundSize: PropTypes.string,
    }),
  }).isRequired,
}

export default Poster
