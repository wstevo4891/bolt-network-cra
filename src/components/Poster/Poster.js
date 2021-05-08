import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import { Overlay } from 'components'

import { PosterControls, PosterControlsWrapper } from './components'

import './Poster.styles.scss'

const Poster = ({ hoverItem, handleMouseLeave, handleMouseOver, posterData }) => {
  const { container, movie, posterImage } = posterData

  return (
    <div
      className={`poster-container ${container.className}`}
      data-index={container.slideIndex}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      style={container.style}
    >
      <Link to={`/movies/${movie.id}`}>
        <div className="poster" style={posterImage}></div>
        <Overlay />
      </Link>
  
      <PosterControlsWrapper
        hoverItem={hoverItem}
        slideItem={container.slideIndex}
      >
        <PosterControls
          hoverItem={hoverItem}
          movie={movie}
          slideItem={container.slideIndex}
        />
      </PosterControlsWrapper>
    </div>
  )
}

Poster.propTypes = {
  handleMouseOver: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
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
