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

import { ToggleIconButton, ToggleListButton } from 'components'

import ListItem from './ListItem'

import './ButtonsList.styles.scss'

const ButtonsList = ({ movie, statusMap, toggleLike, toggleUnlike }) => (
  <ul className="poster-buttons">
    <ListItem
      type="poster-btn-volume"
      status={statusMap.volume}
    >
      <ToggleIconButton
        options={[faVolumeUp, faVolumeOff]}
      />
    </ListItem>

    <ListItem
      type="poster-btn-like"
      status={statusMap.like}
    >
      <ToggleListButton
        listName="LikedList"
        movie={movie}
        options={[faThumbsUpSolid, faThumbsUpClear]}
        updateContainer={toggleLike}
      />
    </ListItem>

    <ListItem
      type="poster-btn-unlike"
      status={statusMap.unlike}
    >
      <ToggleListButton
        listName="UnlikedList"
        movie={movie}
        options={[faThumbsDownSolid, faThumbsDownClear]}
        updateContainer={toggleUnlike}
      />
    </ListItem>

    <li className="poster-btn poster-btn-my-list">
      <ToggleListButton
        listName="MyList"
        movie={movie}
        options={[faCheck, faPlus]}
      />
    </li>
  </ul>
)

ButtonsList.propTypes = {
  movie: PropTypes.object.isRequired,
  statusMap: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleUnlike: PropTypes.func.isRequired
}

export default ButtonsList
