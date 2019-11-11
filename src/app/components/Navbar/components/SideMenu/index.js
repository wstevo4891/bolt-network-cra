// app/javascript/main/components/Navbar/containers/SideMenu.jsx

import React, { Component } from 'react'

// Components
import MenuItem from './components/MenuItem'

import './styles.scss'

export default class SideMenu extends Component {
  state = {
    genres: this.props.genres,
    path: this.props.location.pathname,
    display: this.props.display
  }

  render() {
    if (window.innerWidth > 767) return null

    const path = this.props.location.pathname

    return(
      <div id="side-menu" style={this.containerStyle()}>
        <ul className="navbar-nav">
          <MenuItem
            id="home-link"
            path={path}
            href="/"
            text="Home"
            handleClick={this.handleClick}
          />

          <MenuItem
            id="my-list-link"
            path={path}
            href="/my-list"
            text="My List"
            handleClick={this.handleClick}
          />

          <MenuItem
            id="recent-link"
            path={path}
            href="/recent"
            text="Recently Added"
            handleClick={this.handleClick}
          />

          {this.state.genres.map((genre, index) =>
            <MenuItem
              key={index}
              id={`genre-link-${index}`}
              path={path}
              href={genre.url}
              text={genre.title}
              handleClick={this.handleClick}
            />
          )}
        </ul>
      </div>
    )
  }

  handleClick = () => {
    setTimeout(() => {
      this.props.toggleDisplay()
    }, 1000)
  }

  containerStyle = () => {
    if (this.props.display) {
      return { transform: 'translate3d(0px, 0px, 0px)' }
    } else {
      return { transform: 'translate3d(-9rem, 0px, 0px)' }
    }
  }
}

