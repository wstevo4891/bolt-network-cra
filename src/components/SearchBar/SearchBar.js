import React, { Component } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { noop } from 'utils'

import { SearchClose, SearchIcon, SearchInput } from './components'

import './SearchBar.styles.scss'

class SearchBar extends Component {
  state = {
    firstLocation: useLocation().pathname,
    queryState: false,
  }

  desktopInputRef = React.createRef()

  mobileInputRef = React.createRef()

  render() {
    const { queryState } = this.state

    return(
      <div className="search_bar">
        <SearchIcon />

        <div className="form-inline">
          <SearchInput
            extraClass="desktop_input"
            handleClick={this.handleClick}
            handleKeyUp={this.handleKeyUp}
            placeholder="Titles, people, genres"
            ref={this.desktopInputRef}
          />

          <SearchInput
            extraClass="mobile_input"
            handleClick={this.handleClick}
            handleKeyUp={this.handleKeyUp}
            placeholder="Search"
            ref={this.mobileInputRef}
          />
        </div>

        <SearchClose
          handleClick={this.clearSearch}
          queryState={queryState}
        />
      </div>
    )
  }

  clearSearch = () => {
    this.desktopInputRef.current.value = ''
    this.mobileInputRef.current.value = ''
    this.setState({ queryState: false }, this.updateLocation)
  }

  handleClick = (event) => {
    const query = event.target.value

    this.updateLocation(query)
    this.props.resetSuggestions()
  }

  handleKeyUp = (event) => {
    const query = event.target.value

    this.updateQueryState(query, () => {
      this.updateLocation(query)
      this.props.resetSuggestions()
      this.props.fetchSearchResults(query)
    })
  }

  updateLocation(query = null) {
    const { firstLocation } = this.state

    const history = useHistory()

    if (query && query !== '') {
      history.push(`/search?q=${encodeURIComponent(query)}`)
    
    } else if (firstLocation === '/search') {
      history.push('/')
    
    } else {
      history.push(firstLocation)
    }
  }

  updateQueryState(query, callback = noop) {
    const currentState = (query.length > 0) ? true : false

    if (this.state.queryState === currentState) return

    this.setState({ queryState: currentState }, callback)
  }
}

export default SearchBar
