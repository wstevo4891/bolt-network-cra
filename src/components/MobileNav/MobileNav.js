import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { HamburgerButton, SideMenu } from './components'

import './MobileNav.styles.scss'

const MobileNav = ({ genres }) => {
  const [display, setDisplay] = useState(false)

  const toggleDisplay = () => setDisplay(!display)

  return (
    <div className="mobile_nav">
      <HamburgerButton
        dataTarget="side-menu"
        handleClick={toggleDisplay}
      />

      <SideMenu
        display={display}
        genres={genres}
        toggleDisplay={toggleDisplay}
      />
    </div>
  )
}

MobileNav.propTypes = {
  genres: PropTypes.array,
}

MobileNav.defaultProps = {
  genres: [],
}

export default MobileNav
