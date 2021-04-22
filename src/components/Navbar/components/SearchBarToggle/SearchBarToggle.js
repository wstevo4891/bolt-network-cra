import React, { useState, useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { SearchBar } from 'components'

import ToggleButton from './ToggleButton'

import { useEventListeners } from './utils'

import { MAX_WIDTH, MIN_WIDTH } from './constants'

const SearchBarToggle = () => {
  const [display, setDisplay] = useState(false)
  const toggleDisplay = () => setDisplay(!display)
  
  const toggleRef = useRef()
  const setWidth = (width) => { toggleRef.current.style.width = width }

  const history = useHistory()
  const { pathname } = useLocation()

  const width = display ? MAX_WIDTH : MIN_WIDTH

  useEventListeners(setDisplay, setWidth)

  return (
    <div className="search_bar_toggle">
      <ToggleButton display={display} handleClick={toggleDisplay} />

      <div className="toggle_wrapper" ref={toggleRef} style={{ width }}>
        <SearchBar history={history} location={pathname} />
      </div>
    </div>
  )
}

export default SearchBarToggle
