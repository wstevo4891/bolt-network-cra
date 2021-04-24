import React from 'react'

import { Link } from 'react-router-dom'

import logoSVG from './bolt-network.svg'

import './NavLogo.styles.scss'

const NavLogo = () => (
  <Link className="navbar-brand" to="/">
    <img src={logoSVG} alt="Bolt Network logo" className="logo" />
  </Link>
)

export default NavLogo
