import React from 'react'
import PropTypes from 'prop-types'

import { MobileNav } from '..'

import {
  NavContainer,
  NavCollapse,
  NavLogo,
  SearchBarToggle,
} from './components'

import { buildGenreLinks } from './utils'

const Navbar = ({ genres }) => {
  const genreLinks = buildGenreLinks(genres)

  return (
    <NavContainer>
      <MobileNav genres={genreLinks} />
      <NavLogo />
      <NavCollapse dropdownlinks={genreLinks} />
      <SearchBarToggle />
    </NavContainer>
  )
}

Navbar.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default Navbar
