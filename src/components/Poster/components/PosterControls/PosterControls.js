import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Services
import { SessionListAPI } from 'services'

// Components
import { ButtonsList, MovieInfo } from '..'

// Constants
import {
  LIKED_LIST,
  STATUS_MAP,
  UNLIKED_LIST,
} from './constants'

class PosterControls extends Component {
  state = {
    likeState: undefined
  }

  render() {
    const { likeState } = this.state

    if (likeState === undefined) return null
    
    const { hoverItem, movie } = this.props

    const statusMap = STATUS_MAP[likeState]

    return(
      <span>
        <div className="poster-controls">
          <MovieInfo movie={movie} hoverItem={hoverItem} />

          <ButtonsList
            movie={movie}
            statusMap={statusMap}
            toggleLike={this.toggleLike}
            toggleUnlike={this.toggleUnlike}
          />
        </div>
      </span>
    )
  }

  toggleLike = () => {
    this.setState(prevState => {
      const likeState = prevState.likeState ? null : true

      return { likeState }
    })
  }

  toggleUnlike = () => {
    this.setState(prevState => {
      const likeState = (prevState.likeState === false) ? null : false

      return { likeState }
    })
  }

  componentDidMount() {
    const currentLikeState = this.getLikeState()

    this.setState({
      likeState: currentLikeState
    })
  }

  getLikeState() {
    const movie = this.props.movie

    if (SessionListAPI.findMovie(movie, LIKED_LIST)) return true

    if (SessionListAPI.findMovie(movie, UNLIKED_LIST)) return false

    return null
  }
}

PosterControls.propTypes = {
  hoverItem: PropTypes.number.isRequired,
  movie: PropTypes.object.isRequired,
}

export default PosterControls
