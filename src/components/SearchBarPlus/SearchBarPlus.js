import React, { useState, useRef } from 'react'

import { SearchForm, SearchIcon, ToggleButton } from './components'

import { MAX_WIDTH, MIN_WIDTH } from './constants'

import { useEventListeners } from './utils'

import './SearchBarPlus.styles.scss'

const SearchBarPlus = () => {
  const [display, setDisplay] = useState(false)
  
  const toggleRef = useRef()
  const setWidth = (width) => { toggleRef.current.style.width = width }

  useEventListeners(setDisplay, setWidth)

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

      <div className="toggle_wrapper" ref={toggleRef} style={wrapperStyle}>
        <div className="search_bar">
          <SearchIcon />
          <SearchForm />
        </div>
      </div>
    </div>
  )
}

export default SearchBarPlus
