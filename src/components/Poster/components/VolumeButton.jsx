// app/javascript/main/scenes/components/VolumeButton.jsx

import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeUp, faVolumeMute  } from '@fortawesome/free-solid-svg-icons'

export default class VolumeButton extends Component {
  state = {
    liked: this.props.liked,
    volume: true
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      liked: nextProps.liked
    })
  }

  render() {
    const { liked, volume } = this.state

    const itemClass = this.deterItemClass(liked)
    const buttonIcon = this.determineIcon(volume)

    return(
      <li className={`poster-btn poster-btn-volume ${itemClass}`}>
        <button onClick={() => this.toggleVolume(volume)}>
          <FontAwesomeIcon icon={buttonIcon} />
        </button>
      </li>
    )
  }

  deterItemClass = (liked) => {
    if (liked === null) {
      return 'static'
    } else {
      return 'move-down'
    }
  }

  determineIcon = (volume) => {
    if (volume) {
      return faVolumeUp
    } else {
      return faVolumeMute
    }
  }

  toggleVolume = (volume) => {
    if (volume) {
      this.setState({
        volume: false
      })
    } else {
      this.setState({
        volume: true
      })
    }
  }
}

