import React from 'react'
import PropTypes from 'prop-types'

import { faBars  } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from 'components/IconButton'

const Hamburger = (props) => (
  <IconButton
    buttonProps={{
      ariaControls: props.dataTarget,
      ariaExpanded: 'false',
      ariaLabel: 'Menu Button',
      buttonClass: 'navbar-toggler',
      dataToggle: 'collapse',
      dataTarget: `#${props.dataTarget}`,
      handleClick: props.handleClick,
    }}
    icon={faBars}
  />
)

Hamburger.propTypes = {
  dataTarget: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Hamburger
