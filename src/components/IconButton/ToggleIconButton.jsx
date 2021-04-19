import React, { useState } from 'react'
import PropTypes from 'prop-types'

import IconButton from './IconButton'

import { LEFT, RIGHT } from './constants'

const ToggleIconButton = (props) => {
  const [status, setStatus] = useState(props.status)

  const handleClick = () => {
    setStatus(!status)
    props.callback()
  }

  const icon = status ? props.options[0] : props.options[1]

  return (
    <IconButton
      buttonProps={{
        ...props.buttonProps,
        handleClick,
      }}
      icon={icon}
      text={props.text}
      textPlacement={props.textPlacement}
    />
  )
}

ToggleIconButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  buttonProps: PropTypes.object,
  callback: PropTypes.func,
  status: PropTypes.bool,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf([LEFT, RIGHT]),
}

ToggleIconButton.defaultProps = {
  buttonProps: {},
  callback: () => void {},
  status: true,
  text: null,
  textPlacement: RIGHT,
}

export default ToggleIconButton
