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
  console.log('Navbar.genres', genres)

  if (genres.length === 0) return null

  const genreLinks = buildGenreLinks(genres)

  console.log('Navbar.genreLinks', genreLinks)

  return (
    <NavContainer>
      <MobileNav genres={genreLinks} />
      <NavLogo />
      <NavCollapse dropdownLinks={genreLinks} />
      <SearchBarToggle />
    </NavContainer>
  )
}

Navbar.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default Navbar
