import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '../Button'

import { LEFT, RIGHT } from './constants'

const IconButton = (props) => (
  <Button {...props.buttonProps}>
    {props.textPlacement === LEFT && props.text}
    <FontAwesomeIcon icon={props.icon} />
    {props.textPlacement === RIGHT && props.text}
  </Button>
)

IconButton.propTypes = {
  buttonProps: PropTypes.shape(Button.propTypes).isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf([LEFT, RIGHT]),
}

IconButton.defaultProps = {
  text: null,
  textPlacement: RIGHT,
}

export default IconButton
