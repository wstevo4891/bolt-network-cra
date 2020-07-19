// PosterControls/components/MovieInfo.jsx

import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import MovieTitle from './MovieTitle'

const MovieInfo = ({ movie }) => (
  <div className="movie-info">
    <div>
      <span className="play-icon">
        <FontAwesomeIcon icon={faPlay} />
      </span>
    </div>

    <div>
      <MovieTitle title={movie.title} />
    </div>

    <div>
      <span className="rating">{movie.rated}</span>
      <span>{movie.run_time}</span>
    </div>
    
    <div>
      <p>{movie.genres.join(', ')}</p>
    </div>
  </div>
)

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired
}

export default MovieInfo
