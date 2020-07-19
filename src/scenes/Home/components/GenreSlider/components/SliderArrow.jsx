import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const SliderArrow = (props) => {
  if (props.start) return null

  const buttonClass = `handle handle${props.direction} active`
  const buttonIcon = props.icon === 'left' ? faAngleLeft : faAngleRight

  return (
    <span className={buttonClass}>
      <b className='indicator-icon icon-rightCaret'>
        <FontAwesomeIcon
          icon={buttonIcon}
          onClick={() => props.handleClick(props.direction)}
        />
      </b>
    </span>
  )
}

export default SliderArrow
