import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import { Overlay } from 'components'

import { PosterControls, PosterControlsWrapper } from './components'

import './Poster.styles.scss'

const Poster = ({ mouseOver, mouseLeave, posterData }) => {
  const { container, hoverItem, movie, posterImage, slideItem } = posterData

  return (
    <div
      className={container.className}
      style={container.style}
      onMouseOver={mouseOver}
      onMouseLeave={mouseLeave}
    >
      <Link to={`/movies/${movie.id}`}>
        <div className="poster" style={posterImage}></div>
        <Overlay />
      </Link>
  
      <PosterControlsWrapper
        hoverItem={hoverItem}
        slideItem={slideItem}
      >
        <PosterControls
          hoverItem={hoverItem}
          movie={movie}
          slideItem={slideItem}
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
      style: PropTypes.object,
    }),
    hoverItem: PropTypes.number,
    movie: PropTypes.object,
    posterImage: PropTypes.shape({
      backgroundImage: PropTypes.string,
      backgroundSize: PropTypes.string,
    }),
    slideItem: PropTypes.number,
  }).isRequired,
}

export default Poster
