import PropTypes from 'prop-types'
import React from 'react'

import SlideButtons from './SlideButtons'

const Content = ({ movie }) => (
  <div className="movie-content">
    <span className="movie-year">{movie.year}</span>

    <span className="movie-rating">{movie.rated}</span>

    <span className="movie-length">{movie.runtime}</span>

    <p className="blurb">{movie.plot}</p>

    <SlideButtons movie={movie} />
  </div>
)

Content.propTypes = {
  movie: PropTypes.shape({
    plot: PropTypes.string,
    rated: PropTypes.string,
    runtime: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  }).isRequired
}

export default Content
