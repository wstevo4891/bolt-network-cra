import React, { useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { SearchBar } from 'components'

import ToggleButton from './ToggleButton'

import { MAX_WIDTH, MIN_WIDTH, useEventListeners } from './utils'

import './SearchBarToggle.styles.scss'

const SearchBarToggle = () => {
  const [display, setDisplay] = useState(false)
  
  const toggleRef = useRef()
  const setWidth = (width) => { toggleRef.current.style.width = width }

  useEventListeners(setDisplay, setWidth)

  const history = useHistory()
  const { pathname } = useLocation()

  const toggleDisplay = () => {
    if (display) {
      setWidth(MIN_WIDTH)
      setTimeout(() => setDisplay(false), 400)
    } else {
      setDisplay(true)
      setTimeout(() => setWidth(MAX_WIDTH), 100)
    }
  }

  const wrapperStyle = { display: display ? 'flex' : 'none', }

  return (
    <div className="search_bar_toggle">
      <ToggleButton display={display} handleClick={toggleDisplay} />

      <div className="toggle_wrapper" data-module="search" ref={toggleRef} style={wrapperStyle}>
        <SearchBar history={history} location={pathname} />
      </div>
    </div>
  )
}

export default SearchBarToggle
