// Icon Button Component

import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button'

const IconButton = (props) => (
  <Button {...props.buttonProps}>
    {props.textPlacement === 'left' && props.text}
    <FontAwesomeIcon icon={props.icon} />
    {props.textPlacement === 'right' && props.text}
  </Button>
)

IconButton.propTypes = {
  buttonProps: PropTypes.shape(Button.propTypes).isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf(['left', 'right']),
}

IconButton.defaultProps = {
  text: null,
  textPlacement: 'right',
}

const SwitchIconButton = (props) => {
  const icon = props.status ? props.options[0] : props.options[1]

  return (
    <IconButton
      buttonProps={{
        ...props.buttonProps,
        handleClick: props.handleClick,
      }}
      icon={icon}
      text={props.text}
      textPlacement={props.textPlacement}
    />
  )
}

SwitchIconButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  status: PropTypes.bool.isRequired,
  buttonProps: PropTypes.object,
  handleClick: PropTypes.func,
  iconProps: PropTypes.object,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf(['left', 'right']),
}

SwitchIconButton.defaultProps = {
  buttonProps: {},
  handleClick: () => void {},
  iconProps: {},
  text: null,
  textPlacement: 'right',
}

const ToggleIconButton = (props) => {
  const [status, setStatus] = useState(props.status)

  const handleClick = () => {
    setStatus(!status)
    props.callback()
  }

  return (
    <SwitchIconButton
      handleClick={handleClick}
      status={status}
      {...props.clickableProps}
    />
  )
}

ToggleIconButton.propTypes = {
  clickableProps: PropTypes.object,
  callback: PropTypes.func,
  status: PropTypes.bool,
}

ToggleIconButton.defaultProps = {
  clickableProps: {},
  callback: () => void {},
  status: true,
}

export {
  IconButton,
  SwitchIconButton,
  ToggleIconButton,
}
