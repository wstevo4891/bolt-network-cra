import React from 'react'
import { useSelector } from 'react-redux'

import { MobileNav, SearchBar } from '..'

import {
  NavContainer,
  NavCollapse,
  NavLogo,
} from './components'

import { buildGenreLinks, selectGenresList } from './utils'

const Navbar = () => {
  const genres = useSelector(selectGenresList)

  if (genres === null) return null

  const genreLinks = buildGenreLinks(genres)

  return (
    <NavContainer>
      <MobileNav genres={genreLinks} />
      <NavLogo />
      <NavCollapse dropdownLinks={genreLinks} />
      <SearchBar />
    </NavContainer>
  )
}

export default Navbar
