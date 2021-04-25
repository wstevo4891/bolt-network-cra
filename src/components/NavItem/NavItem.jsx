import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import ScreenReaderText from './ScreenReaderText'

import './NavItem.styles.scss'

const NavItem = (props) => {
  const itemClass = (props.path === props.href) ? 'nav-item active' : 'nav-item'

  return (
    <li className={itemClass} onClick={props.handleClick}>
      <Link
        id={props.id}
        className="nav-link"
        to={props.href}
      >
        {props.text}&nbsp;
        <ScreenReaderText
          href={props.href}
          path={props.path}
          text={props.text}
        />
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  handleClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

NavItem.defaultProps = {
  handleClick: () => void {},
}

export default NavItem
