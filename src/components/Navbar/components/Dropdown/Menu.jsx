import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = ({ dropdownId, links, showMenu }) => {
  if (showMenu === false) return null

  return (
    <div
      className="dropdown-menu"
      aria-labelledby={dropdownId}
    >
      {links.map((link, index) => (
        <Link
          key={`dropdown_link_${index}`}
          className="dropdown-item"
          to={link.url}
        >
          {link.text}
        </Link>
      ))}
    </div>
  )
}

Menu.propTypes = {
  dropdownId: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  showMenu: PropTypes.bool.isRequired,
}

Menu.defaultProps = {
  dropdownId: 'dropdownMenu'
}

export default Menu
