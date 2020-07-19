// Poster Buttons List

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

import ListItem from './ListItem'
import { ToggleIconButton, ToggleListButton } from 'components'

const ButtonsList = (props) => (
  <ul className="poster-buttons">
    <ListItem
      type="poster-btn-volume"
      status={props.statusMap.volume}
    >
      <ToggleIconButton
        clickableProps={{ options: [faVolumeUp, faVolumeOff] }}
      />
    </ListItem>

    <ListItem
      type="poster-btn-like"
      status={props.statusMap.like}
    >
      <ToggleListButton
        clickableProps={{ options: [faThumbsUpSolid, faThumbsUpClear] }}
        movie={props.movie}
        listName="LikedList"
        updateContainer={props.toggleLike}
      />
    </ListItem>

    <ListItem
      type="poster-btn-unlike"
      status={props.statusMap.unlike}
    >
      <ToggleListButton
        clickableProps={{ options: [ faThumbsDownSolid, faThumbsDownClear] }}
        movie={props.movie}
        listName="UnlikedList"
        updateContainer={props.toggleUnlike}
      />
    </ListItem>

    <li className="poster-btn poster-btn-my-list">
      <ToggleListButton
        clickableProps={{ options: [faCheck, faPlus] }}
        movie={props.movie}
        listName="MyList"
      />
    </li>
  </ul>
)

ButtonsList.propTypes = {
  statusMap: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired,
  toggleLike: PropTypes.func.isRequired,
  toggleUnlike: PropTypes.func.isRequired
}

export default ButtonsList
