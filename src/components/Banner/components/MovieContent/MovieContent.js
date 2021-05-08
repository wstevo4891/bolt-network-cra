import PropTypes from 'prop-types'
import React from 'react'

import { ContentRow, MyListButton, PlayLink } from '..'

import './MovieContent.styles.scss'

const MovieContent = ({ movie }) => (
  <div className="movie-content">
    <img
      src={movie.logo}
      className="img-fluid"
      alt={`${movie.title} logo`}
    />
    <ContentRow>
      <span className="blue-span">{movie.year}</span>
      <span className="blue-span">{movie.rating}</span>
      <span className="blue-span">{movie.runtime}</span>
      <p className="blurb">{movie.plot}</p>
    </ContentRow>
    <ContentRow>
      <PlayLink url={movie.url} />
      <MyListButton movie={movie} />
    </ContentRow>
  </div>
)

MovieContent.propTypes = {
  movie: PropTypes.shape({
    logo: PropTypes.string,
    plot: PropTypes.string,
    rating: PropTypes.string,
    runtime: PropTypes.number,
    title: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
}

export default MovieContent
