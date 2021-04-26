import React from 'react'
import PropTypes from 'prop-types'

import { faBars  } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from 'components'

import './HamburgerButton.styles.scss'

const HamburgerButton = ({ dataTarget, handleClick }) => {
  const buttonProps = {
    handleClick,
    ariaControls: dataTarget,
    ariaExpanded: 'false',
    ariaLabel: 'Menu Button',
    buttonClass: 'navbar-toggler',
    dataToggle: 'collapse',
    dataTarget: `#${dataTarget}`,
  }

  return <IconButton buttonProps={buttonProps} icon={faBars} />
}

HamburgerButton.propTypes = {
  dataTarget: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default HamburgerButton
