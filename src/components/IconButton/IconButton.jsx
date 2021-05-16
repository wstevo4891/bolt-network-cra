import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { LEFT, RIGHT } from 'utils'

import Button from '../Button'

const IconButton = ({ buttonProps, icon, text, textPlacement }) => (
  <Button {...buttonProps}>
    {textPlacement === LEFT && text}
    <FontAwesomeIcon icon={icon} />
    {textPlacement === RIGHT && text}
  </Button>
)

IconButton.propTypes = {
  buttonProps: PropTypes.shape(Button.propTypes).isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf([LEFT, RIGHT]),
}

IconButton.defaultProps = {
  text: null,
  textPlacement: RIGHT,
}

export default IconButton
