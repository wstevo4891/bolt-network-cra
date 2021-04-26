import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import './PlayLink.styles.scss'

const PlayLink = ({ url }) => (
  <Link to={url} className="play-link">
    <FontAwesomeIcon icon={faPlay} />PLAY
  </Link>
)

PlayLink.propTypes = {
  url: PropTypes.string.isRequired,
}

export default PlayLink
