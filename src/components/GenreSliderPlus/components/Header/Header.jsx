import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import './Header.styles.scss'

const Header = ({ title, url }) => {
  return (
    <h2 className='rowHeader'>
      <Link to={url} className='rowTitle'>
        <div className='row-header-title'>{title}</div>
      </Link>
    </h2>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Header
