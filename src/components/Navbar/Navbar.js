import React from 'react'
import PropTypes from 'prop-types'

import { MobileNav, SearchBarPlus } from '..'

import {
  NavContainer,
  NavCollapse,
  NavLogo,
  // SearchBarToggle,
} from './components'

import { buildGenreLinks } from './utils'

const Navbar = ({ genres }) => {
  if (genres.length === 0) return null

  const genreLinks = buildGenreLinks(genres)

  return (
    <NavContainer>
      <MobileNav genres={genreLinks} />
      <NavLogo />
      <NavCollapse dropdownLinks={genreLinks} />
      <SearchBarPlus />
    </NavContainer>
  )
}

Navbar.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default Navbar
