// app/javascript/main/components/Navbar/containers/SearchBar.jsx

import React, { Component } from 'react'

import './styles/index.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

// Components
import InputDisplay from './components/InputDisplay'

export default class SearchBar extends Component {
  state = {
    display: false
  }

  // When we click on the hour glass button, we'll hide it,
  // render the searchInput div, and animate its width to 270px.
  render() {
    const { display } = this.state
    const { location, history } = this.props

    const boxClass = display ? 'searchBox d-none' : 'searchBox'
    const wrapperClass = display ? 'searchWrapper' : 'searchWrapper d-none'

    return(
      <li className="d-sm-inline-block nav-item">
        <button
          className={boxClass}
          id="nav-item"
          onClick={this.handleClick}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>

        <div className={wrapperClass}>
          <InputDisplay
            location={location}
            history={history}
            display={display}
            hideDisplay={this.hideDisplay}
          />
        </div>
      </li>
    )
  }

  handleClick = () => {
    this.setState({
      display: true
    })
  }

  hideDisplay = () => {
    this.setState({
      display: false
    })
  }
}
