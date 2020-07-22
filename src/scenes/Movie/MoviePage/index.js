// MoviePage View Component

import PropTypes from 'prop-types'
import React from 'react'

import './MoviePage.styles.scss'

function displayArray(arr) {
  if (arr.length === 1) return arr.join('')

  return arr.join(', ')
}

const MoviePage = ({ movie }) => (
  <div className="row">
    <div className="col-4">
      <img
        src={movie.poster}
        className="img-fluid"
        alt={`Poster for ${movie.title}`}
      />
    </div>

    <div className="col-8 movie-display">
      <p><span>Year: </span>{movie.year}</p>
      <p><span>Rated: </span>{movie.rated}</p>
      <p><span>Runtime: </span>{movie.run_time}</p>
      <p><span>Release Date: </span>{movie.release_date}</p>
      <p><span>Genres: </span>{displayArray(movie.genres)}</p>
      <p><span>Director: </span>{displayArray(movie.directors)}</p>
      <p><span>Actors: </span>{displayArray(movie.actors)}</p>
      <p>
        <span>Plot: </span>
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
