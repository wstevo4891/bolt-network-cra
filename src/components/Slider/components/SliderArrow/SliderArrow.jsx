import React from 'react'
import PropTypes from 'prop-types'

import {
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { PREV, NEXT } from 'utils'

// import { IconButton } from 'components'

import './SliderArrow.styles.scss'

const ICON_MAP = {
  [PREV]: faAngleLeft,
  [NEXT]: faAngleRight,
}

const SliderArrow = ({ direction, handleClick, start }) => {
  if (start) return null

  const icon = ICON_MAP[direction]

  return (
    <span
      className={`handle handle${direction} active`}
      onClick={handleClick}
    >
      <b className='indicator-icon icon-rightCaret'>
        <FontAwesomeIcon icon={icon} />
      </b>
    </span>
  )
}

SliderArrow.propTypes = {
  direction: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  start: PropTypes.bool,
}

SliderArrow.defaultProps = {
  start: false,
}

export default SliderArrow
