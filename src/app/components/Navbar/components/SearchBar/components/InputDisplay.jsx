// app/javascript/main/components/Navbar/components/InputDisplay.jsx

import React, { Component } from 'react'
import { Motion, spring } from 'react-motion'

// Components
import { SearchInput } from './SearchInput'
import { SearchClose } from './SearchClose'

export default class InputDisplay extends Component {
  state = {
    start: 0,
    end: 270,
    queryExists: false
  }

  searchClasses = [
    'searchWrapper',
    'searchInput',
    'fa',
    'form-inline',
    'form-control'
  ]

  // Render the searchInput div, and animate its width to 270px.
  render() {
    if (this.props.display === false) return null

    const { start, end, queryExists } = this.state

    return(
      <Motion defaultStyle={{ x: start }} style={{ x: spring(end) }}>
        {value => (
          <div id="searchInput" style={{ width: `${value.x}px` }}>
            <i className="fa fa-search" id="searchIcon" aria-hidden="true"></i>

            <div className="form-inline">
              <SearchInput
                update={this.updateQuery}
                location={this.props.location}
                history={this.props.history}
                placeholder="Titles, people, genres"
              />
            </div>

            <SearchClose
              query={queryExists}
              handleClick={this.handleClick}
            />
          </div>
        )}
      </Motion>
    )
  }

  updateQuery = (query) => {
    if (query && query !== '') {
      this.setState({
        queryExists: true
      })
    } else {
      this.setState({
        queryExists: false
      })
    }
  }

  componentDidMount() {
    // Add the event listener that hides the search bar
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  componentWillUnmount() {
    // Remove the mouseUp event listener
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseUp = (event) => {
    const $input = document.getElementById('searchInput')

    if ($input === null) return

    const searchValue = document.getElementById('search').value
    const targetClass = event.target.className

    if (this.targetCheck($input, searchValue, targetClass)) {
      this.updateBar()
    }
  }

  targetCheck = (input, value, target) => {
    return input && value.length === 0 && !this.searchClasses.includes(target)
  }

  updateBar = () => {
    this.setState({
      start: 270,
      end: 0
    })

    setTimeout(() => {
      this.setState({
        start: 0,
        end: 270
      })

      this.props.closeDisplay()
    }, 400)
  }

  handleClick = () => {
    const { history, location } = this.props
    document.getElementById('search').value = ''
    this.setState({ queryExists: false })
    
    if (location === '/search') {
      history.push('/')
    } else {
      history.push(location)
    }
  }
}
