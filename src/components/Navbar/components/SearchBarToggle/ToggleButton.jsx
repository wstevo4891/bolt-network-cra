import PropTypes from 'prop-types'
import React from 'react'

import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from 'components'

const ToggleButton = ({ display, handleClick }) => {
  const buttonClass = display ? 'search_button d-none' : 'search_button'

  const buttonProps = {
    buttonClass,
    handleClick,
    ariaHidden: 'true',
  }

  return <IconButton buttonProps={buttonProps} icon={faSearch} />
}

ToggleButton.propTypes = {
  display: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ToggleButton
