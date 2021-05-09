import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'

import { ToggleButton } from '..'

import { MAX_WIDTH } from './constants'

import { useEventListeners } from './utils'

import './ToggleWrapper.styles.scss'

const ToggleWrapper = ({ children }) => {
  const [display, setDisplay] = useState(false)
  
  const toggleRef = useRef()
  const setWidth = (width) => { toggleRef.current.style.width = width }

  useEventListeners(setDisplay, setWidth)

  const displaySearchBar = () => {
    setDisplay(true)
    setTimeout(() => setWidth(MAX_WIDTH), 100)
  }

  const wrapperStyle = { display: display ? 'flex' : 'none', }

  return (
    <div className="search_bar_toggle">
      <ToggleButton display={display} handleClick={displaySearchBar} />

      <div className="toggle_wrapper" ref={toggleRef} style={wrapperStyle}>
        {children}
      </div>
    </div>
  )
}

ToggleWrapper.propTypes = {
  children: PropTypes.element,
}

ToggleWrapper.defaultProps = {
  children: null,
}

export default ToggleWrapper
