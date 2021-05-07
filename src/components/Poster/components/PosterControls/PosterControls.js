import PropTypes from 'prop-types'
import React, { Component } from 'react'

// Services
import { SessionListAPI } from 'services'

// Components
import { ButtonsList, MovieInfo } from '..'

// Constants
const LIKED_LIST = 'LikedList'

const UNLIKED_LIST = 'UnlikedList'

class PosterControls extends Component {
  state = {
    likeState: undefined
  }

  render() {
    const { likeState } = this.state
    const { hoverItem, movie } = this.props

    if (likeState === undefined) return null

    return(
      <div className="poster-controls">
        <MovieInfo movie={movie} hoverItem={hoverItem} />

        <ButtonsList
          movie={movie}
          likeState={likeState}
          toggleLike={this.toggleLike}
          toggleUnlike={this.toggleUnlike}
        />
      </div>
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
    const likeState = this.getLikeState()
    this.setState({ likeState })
  }

  getLikeState() {
    const { movie } = this.props

    if (SessionListAPI.findMovie(movie, LIKED_LIST)) return true

    if (SessionListAPI.findMovie(movie, UNLIKED_LIST)) return false

    return null
  }
}

PosterControls.propTypes = {
  hoverItem: PropTypes.number,
  movie: PropTypes.object.isRequired,
}

PosterControls.defaultProps = {
  hoverItem: null,
}

export default PosterControls
