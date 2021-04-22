// src/components/Poster/index.jsx

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import { Overlay } from 'components'

import { PosterControls, PosterControlsWrapper } from './components'

import './Poster.styles.scss'

const Poster = (props) => (
  <div
    className={props.containerClass}
    style={props.containerStyle}
    onMouseOver={props.mouseOver}
    onMouseLeave={props.mouseLeave}
  >
    <Link to={`/movies/${props.movie.id}`}>
      <div className="poster" style={props.posterImage}></div>
      <Overlay />
    </Link>

    <PosterControlsWrapper
      hoverItem={props.hoverItem}
      slideItem={props.slideItem}
    >
      <PosterControls
        hoverItem={props.hoverItem}
        movie={props.movie}
        slideItem={props.slideItem}
      />
    </PosterControlsWrapper>
  </div>
)

Poster.propTypes = {
  containerClass: PropTypes.string,
  containerStyle: PropTypes.object,
  hoverItem: PropTypes.number,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  movie: PropTypes.object,
  posterImage: PropTypes.object,
  slideItem: PropTypes.number
}

export default Poster
