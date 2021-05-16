import PropTypes from 'prop-types'
import React from 'react'

import { ButtonsList, MovieInfo } from '..'

import { useLikeState } from './hooks'

const PosterControls = ({ hoverItem, movie }) => {
  const [likeState, toggleLike, toggleUnlike] = useLikeState(movie)

  return(
    <div className="poster-controls">
      <MovieInfo movie={movie} hoverItem={hoverItem} />

      <ButtonsList
        movie={movie}
        likeState={likeState}
        toggleLike={toggleLike}
        toggleUnlike={toggleUnlike}
      />
    </div>
  )
}

PosterControls.propTypes = {
  hoverItem: PropTypes.number,
  movie: PropTypes.object.isRequired,
}

PosterControls.defaultProps = {
  hoverItem: null,
}

export default PosterControls
