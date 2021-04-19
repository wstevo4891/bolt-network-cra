// Navbar Main Component

import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import NavbarUI from './NavbarUI'

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: props.location.pathname,
      displayMenu: false
    }

    this.handleInputClick = this.handleInputClick.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  render() {
    const { fetchSearchResults, genres, history, location } = this.props

    return (
      <NavbarUI
        history={history}
        location={location}
        displayMenu={this.state.displayMenu}
        genreLinks={genres}
        toggleDisplay={this.toggleDisplay}
        fetchSearchResults={fetchSearchResults}
        handleKeyUp={this.handleKeyUp}
        handleInputClick={this.handleInputClick}
      />
    )
  }

  toggleDisplay() {
    this.setState(prevState => ({ displayMenu: !prevState.displayMenu }))
  }

  handleKeyUp(event) {
    const query = event.target.value

    this.updateLocation(query)

    this.props.resetSuggestions()

    this.props.fetchSearchResults(query)
  }

  handleInputClick(event) {
    const query = event.target.value

    this.updateLocation(query)

    this.props.resetSuggestions()
  }

  updateLocation(query) {
    const history = this.props.history
    const location = this.state.location

    if (query && query !== '') {
      history.push(`/search?q=${encodeURIComponent(query)}`)
    
    } else if (location === '/search') {
      history.push('/')
    
    } else {
      history.push(location)
    }
  }

  componentDidUpdate() {
    const stateLocation = this.state.location
    const propsLocation = this.props.location.pathname

    if (
      propsLocation === '/search' ||
      propsLocation === stateLocation
    ) return

    this.setState({
      location: propsLocation
    })
  }
}

Navbar.propTypes = {
  genres: PropTypes.array.isRequired,
  history: PropTypes.object,
  location: PropTypes.object,
  dispatch: PropTypes.func
}

export default Navbar
