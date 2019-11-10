// app/javascript/main/components/Navbar/containers/Navbar.jsx

import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

import logo from './images/bolt-network.svg'

import './styles/main.scss'

// Components
import NavCollapse from './components/NavCollapse'
import SideMenu from './components/SideMenu/index'
import Hamburger from './components/Hamburger'
import { SearchInput } from './components/SearchBar/SearchInput'

export default class Navbar extends Component {
  state = {
    width: this.props.width,
    displayMobile: false,
    displayMenu: false
  }

  componentWillReceiveProps(nextProps) {
    const width = nextProps.width

    if (width < 768) {
      this.addShadow()
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({ width: width, displayMobile: true })

    } else {
      this.removeShadow()
      window.addEventListener('scroll', this.handleScroll)
      this.setState({ width: width, displayMobile: false })
    }
  }

  render() {
    const { displayMenu } = this.state

    return (
      <div id="navbar">
        <nav className="navbar navbar-expand-md fixed-top">
          <Hamburger dataTarget="navbarContent" onClickHandler={this.toggleDisplay} />

          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Bolt Network logo" className="logo" />
          </Link>

          <Route
            render={(routeProps) => <NavCollapse {...this.props} {...routeProps} />}
          />

          <Route
            render={(routeProps) => (
              <div id="mobileSearchInput">
                <div className="form-inline">
                  <SearchInput
                    location={routeProps.location.pathname}
                    history={routeProps.history}
                    placeholder="Search"
                  />
                </div>
              </div>
            )}
          />

          <Route
            render={(routeProps) => (
              <SideMenu
                genres={this.props.genres}
                display={displayMenu}
                {...routeProps}
                toggleDisplay={this.toggleDisplay}
              />
            )}
          />
        </nav>
      </div>
    )
  }

  toggleDisplay = () => {
    const displayMenu = this.state.displayMenu

    if (displayMenu) {
      this.setState({
        displayMenu: false
      })
    } else {
      this.setState({
        displayMenu: true
      })
    }
  }

  componentDidMount() {
    if (this.state.width < 768) {
      this.addShadow()
      window.removeEventListener('scroll', this.handleScroll)
      this.setState({ displayMobile: true })

    } else {
      this.removeShadow()
      window.addEventListener('scroll', this.handleScroll)
      this.setState({ displayMobile: false })
    }
  }

  componentWillUnmount() {
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
