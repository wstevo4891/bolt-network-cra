// app/javascript/main/components/Navbar/containers/Navbar.jsx

import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import logo from './images/bolt-network.svg'

import './styles/main.scss'

// Components
import NavCollapse from './components/NavCollapse'
import SideMenu from './components/SideMenu'
import Hamburger from './components/Hamburger'
import { SearchInput } from './components/SearchBar/components/SearchInput'

export default class Navbar extends Component {
  state = {
    displayMenu: false
  }

  render() {
    const { displayMenu } = this.state

    const genreLinks = Object.values(this.props.genresIndex)

    return (
      <div id="navbar">
        <nav className="navbar navbar-expand-md fixed-top">
          <Hamburger
            dataTarget="side-menu"
            handleClick={this.toggleDisplay}
          />

          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Bolt Network logo" className="logo" />
          </Link>

          <Route
            render={(routeProps) =>
              <>
                <NavCollapse
                  genreLinks={genreLinks}
                  {...this.props}
                  {...routeProps}
                />

                <div id="mobileSearchInput">
                  <div className="form-inline">
                    <SearchInput
                      location={routeProps.location.pathname}
                      history={routeProps.history}
                      placeholder="Search"
                      handleChange={this.props.fetchResults}
                    />
                  </div>
                </div>

                <SideMenu
                  genres={genreLinks}
                  display={displayMenu}
                  {...routeProps}
                  toggleDisplay={this.toggleDisplay}
                />
              </>
            }
          />
        </nav>
      </div>
    )
  }

  toggleDisplay = () => {
    this.setState({
      displayMenu: !this.state.displayMenu
    })
  }

  componentDidMount() {
    this.assignScrollListener()

    window.addEventListener('resize', this.assignScrollListener)
  }

  assignScrollListener = () => {
    if (window.innerWidth < 768) {
      this.addShadow()
      window.removeEventListener('scroll', this.handleScroll)

    } else {
      this.removeShadow()
      window.addEventListener('scroll', this.handleScroll)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.assignScrollListener)
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const scrollLength = window.scrollY

    if (scrollLength > 20) {
      this.addShadow()
    } else {
      this.removeShadow()
    }
  }

  removeShadow = () => {
    document.querySelector('.navbar').classList.remove('nav-shadow')
  }

  addShadow = () => {
    document.querySelector('.navbar').classList.add('nav-shadow')
  }
}
