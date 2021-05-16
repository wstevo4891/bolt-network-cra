import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { LEFT, RIGHT, noop } from 'utils'

import IconButton from './IconButton'

const ToggleIconButton = ({ buttonProps, callback, options, status, text, textPlacement }) => {
  const [iconStatus, setIconStatus] = useState(status)

  const handleClick = () => {
    setIconStatus(!iconStatus)
    callback()
  }

  const icon = iconStatus ? options[0] : options[1]

  return (
    <IconButton
      buttonProps={{
        ...buttonProps,
        handleClick,
      }}
      icon={icon}
      text={text}
      textPlacement={textPlacement}
    />
  )
}

ToggleIconButton.propTypes = {
  buttonProps: PropTypes.object,
  callback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.bool,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf([LEFT, RIGHT]),
}

ToggleIconButton.defaultProps = {
  buttonProps: {},
  callback: noop,
  status: true,
  text: null,
  textPlacement: RIGHT,
}

export default ToggleIconButton
