import React, { useState, useRef } from 'react'

import { SearchBar } from 'components'

import ToggleButton from './ToggleButton'

import { useEventListeners } from './utils'

import { MAX_WIDTH, MIN_WIDTH } from './constants'

const SearchBarToggle = () => {
  const [display, setDisplay] = useState(false)
  const toggleDisplay = () => setDisplay(!display)
  
  const toggleRef = useRef()
  const setWidth = (width) => { toggleRef.current.style.width = width }

  const width = display ? MAX_WIDTH : MIN_WIDTH

  useEventListeners(setDisplay, setWidth)

  return (
    <div className="search_bar_toggle">
      <ToggleButton display={display} handleClick={toggleDisplay} />

      <div className="toggle_wrapper" ref={toggleRef} style={{ width }}>
        <SearchBar />
      </div>
    </div>
  )
}

export default SearchBarToggle
