import React from 'react'
import PropTypes from 'prop-types'

import {
  faCheck,
  faPlus,
  faThumbsDown as faThumbsDownSolid,
  faThumbsUp as faThumbsUpSolid,
  faVolumeOff,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons'

import {
  faThumbsUp as faThumbsUpClear,
  faThumbsDown as faThumbsDownClear,
} from '@fortawesome/free-regular-svg-icons'

import { CircleIconButton } from '..'

import { STATUS_MAP } from './constants'

import './ButtonsList.styles.scss'

const ButtonsList = ({ movie, likeState, toggleLike, toggleUnlike }) => {
  const currentStatus = STATUS_MAP[likeState]

  return (
    <ul className="poster-buttons">
      <li>
        <CircleIconButton
          options={[faVolumeUp, faVolumeOff]}
          status={currentStatus.volume}
          type="toggle-volume"
        />
      </li>
      <li>
        <CircleIconButton
          callback={toggleLike}
          listName="LikedList"
          movie={movie}
          options={[faThumbsUpSolid, faThumbsUpClear]}
          status={currentStatus.like}
          type="toggle-list"
        />
      </li>
      <li>
        <CircleIconButton
          callback={toggleUnlike}
          listName="UnlikedList"
          movie={movie}
          options={[faThumbsDownSolid, faThumbsDownClear]}
          status={currentStatus.unlike}
          type="toggle-list"
        />
      </li>
      <li>
        <CircleIconButton
          listName="MyList"
          movie={movie}
          options={[faCheck, faPlus]}
        />
      </li>
    </ul>
  )
}

ButtonsList.propTypes = {
  movie: PropTypes.object.isRequired,
  likeState: PropTypes.bool,
  toggleLike: PropTypes.func.isRequired,
  toggleUnlike: PropTypes.func.isRequired
}

ButtonsList.defaultProps = {
  likeState: null,
}

export default ButtonsList
