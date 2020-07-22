import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './SliderArrow.styles.scss'

const SliderArrow = (props) => {
  if (props.start) return null

  return (
    <span
      className={`handle handle${props.direction} active`}
      onClick={props.handleClick}
    >
      <b className='indicator-icon icon-rightCaret'>
        <FontAwesomeIcon icon={props.icon} />
      </b>
    </span>
  )
}

SliderArrow.propTypes = {
  start: PropTypes.bool.isRequired,
  direction: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default SliderArrow
