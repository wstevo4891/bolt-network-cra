import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { NavItem } from 'components'

const SideMenu = ({ display, genres, toggleDisplay }) => {
  const path = useLocation().pathname

  const handleClick = () => setTimeout(toggleDisplay(), 1000)
  
  const translateX = display ? '0px' : '-9rem'

  const transform = `translate3d(${translateX}, 0px, 0px)`

  return(
    <div className="side_menu" style={{ transform }}>
      <ul className="navbar-nav">
        <NavItem
          id="mobile-home-link"
          path={path}
          href="/"
          text="Home"
          handleClick={handleClick}
        />

        <NavItem
          id="mobile-my-list-link"
          path={path}
          href="/my-list"
          text="My List"
          handleClick={handleClick}
        />

        <NavItem
          id="mobile-recent-link"
          path={path}
          href="/recent"
          text="Recently Added"
          handleClick={handleClick}
        />

        {genres.map((genre, index) =>
          <NavItem
            key={index}
            path={path}
            href={genre.url}
            text={genre.text}
            handleClick={handleClick}
          />
        )}
      </ul>
    </div>
  )
}

SideMenu.propTypes = {
  display: PropTypes.bool.isRequired,
  genres: PropTypes.array.isRequired,
  toggleDisplay: PropTypes.func.isRequired,
}

export default SideMenu
