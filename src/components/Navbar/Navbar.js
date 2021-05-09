import React from 'react'
import { useSelector } from 'react-redux'

import { API } from 'store'

import { MobileNav, SearchBar } from '..'

import {
  NavContainer,
  NavCollapse,
  NavLogo,
} from './components'

const Navbar = () => {
  const genres = useSelector(API.genres.selectList)

  if (genres === null) return null

  const genreLinks = genres.map(({ title, url }) => ({ text: title, url }))

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
