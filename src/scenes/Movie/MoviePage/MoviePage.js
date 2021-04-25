import PropTypes from 'prop-types'
import React from 'react'

import Poster from './Poster'

import { displayList } from './utils'

import './MoviePage.styles.scss'

const MoviePage = ({ movie }) => (
  <div className="row">
    <div className="col-4">
      <Poster source={movie.poster} title={movie.title} />
    </div>

    <div className="col-8 movie-display">
      <p><span className="label">Year: </span>{movie.year}</p>

      <p><span className="label">Rated: </span>{movie.rating}</p>

      <p><span className="label">Runtime: </span>{movie.runtime}</p>

      <p><span className="label">Release Date: </span>{movie.release_date}</p>

      <p><span className="label">Genres: </span>{displayList(movie.genres)}</p>

      <p><span className="label">Director: </span>{displayList(movie.directors)}</p>

      <p><span className="label">Actors: </span>{displayList(movie.actors)}</p>

      <p>
        <span className="label">Plot: </span>
        <span className="movie-plot">{movie.plot}</span>
      </p>
    </div>
  </div>
)

MoviePage.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    rated: PropTypes.string,
    run_time: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    directors: PropTypes.array,
    actors: PropTypes.array,
    plot: PropTypes.string,
  }),
}

export default MoviePage
