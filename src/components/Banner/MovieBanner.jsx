// MovieBanner UI Component

import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'

import Overlay from '../Overlay'
import ToggleListButton from '../ToggleListButton'

import './MovieBanner.styles.scss'

function BannerImage(url) {
  this.backgroundImage = `url(${url})`
  this.backgroundRepeat = 'no-repeat'
  this.backgroundPosition = 'center'
  this.backgroundSize = 'cover'
  this.height = '100%'
}

const MovieBanner = ({ movie }) => {
  const bannerImage = new BannerImage(movie.banner.url)

  return(
    <div className="banner">
      <div style={bannerImage}>
        <div className="slide-info d-none d-sm-block">
          <img
            src={movie.logo.url}
            className="img-fluid movie-logo"
            alt="Movie logo"
          />

          <div className="movie-content">
            <span className="movie-year">{movie.year}</span>
            <span className="movie-rating">{movie.rated}</span>
            <span className="movie-length">{movie.run_time}</span>

            <p className="blurb">{movie.plot}</p>

            <div className="slide-buttons">
              <Link to={movie.url} className="btn-blue" id="play">
                <FontAwesomeIcon icon={faPlay} />PLAY
              </Link>

              <ToggleListButton
                clickableProps={{
                  buttonProps: {
                    buttonClass: 'btn-clear',
                  },
                  options: [faCheck, faPlus],
                  text: 'MY LIST',
                }}
                movie={movie}
                listName="MyList"
              />
            </div>
          </div>
        </div>
        <Overlay />
      </div>
    </div>
  )
}

MovieBanner.propTypes = {
  movie: PropTypes.shape({
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
    logo: PropTypes.shape({
      url: PropTypes.string,
    }),
    plot: PropTypes.string,
    rated: PropTypes.string,
    run_time: PropTypes.string,
    url: PropTypes.string,
    year: PropTypes.number,
  })
}

export default MovieBanner
