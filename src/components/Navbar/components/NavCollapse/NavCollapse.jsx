import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { NavItem } from 'components'

import Dropdown from '../Dropdown'

const GENRES_PATH_REGEX = /\/genres/

const NavCollapse = ({ dropdownLinks }) => {
  const { pathname } = useLocation()

  return(
    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav mr-auto">
        <NavItem
          id="home-link"
          path={pathname}
          href="/"
          text="Home"
        />

        <Dropdown
          id="genre-link"
          dropdownId="genresDropdown"
          links={dropdownLinks}
          path={pathname}
          pathRegex={GENRES_PATH_REGEX}
          text="Genres"
        />

        <NavItem
          id="recent-link"
          path={pathname}
          href="/recent"
          text="Recently Added"
        />

        <NavItem
          id="my-list-link"
          path={pathname}
          href="/my-list"
          text="My List"
        />
      </ul>
    </div>
  )
}

NavCollapse.propTypes = {
  dropdownLinks: PropTypes.array.isRequired,
}

export default NavCollapse
