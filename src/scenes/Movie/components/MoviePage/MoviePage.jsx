import PropTypes from 'prop-types'
import React from 'react'
import { Col, Row } from 'reactstrap'

import { LabelledLine } from '..'

import { displayList } from './utils'

import './MoviePage.styles.scss'

const MoviePage = ({ movie }) => (
  <Row>
    <Col sm="4">
      <img src={movie.poster} className="img-fluid" alt={`${movie.title} poster`} />
    </Col>

    <Col sm="8">
      <div className="movie-display">
        <LabelledLine label="Year">{movie.year}</LabelledLine>

        <LabelledLine label="Rated">{movie.rating}</LabelledLine>

        <LabelledLine label="Runtime">{`${movie.runtime} minutes`}</LabelledLine>

        <LabelledLine label="Release Date">{movie.release_date}</LabelledLine>

        <LabelledLine label="Genres">{displayList(movie.genres)}</LabelledLine>

        <LabelledLine label="Director">{displayList(movie.directors)}</LabelledLine>

        <LabelledLine label="Actors">{displayList(movie.actors)}</LabelledLine>

        <LabelledLine label="Plot">
          <span className="movie-plot">{movie.plot}</span>
        </LabelledLine>
      </div>
    </Col>
  </Row>
)

MoviePage.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    rated: PropTypes.string,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    directors: PropTypes.array,
    actors: PropTypes.array,
    plot: PropTypes.string,
  }),
}

export default MoviePage
