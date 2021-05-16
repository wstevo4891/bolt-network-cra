import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { useScrollShadowEffect } from './hooks'

import './NavContainer.styles.scss'

const NavContainer = ({ children }) => {
  const navbarRef = useRef(null)

  useScrollShadowEffect(navbarRef)

  return(
    <nav className="navbar navbar-expand-md fixed-top" ref={navbarRef}>
      {children}
    </nav>
  )
}

NavContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default NavContainer
