import React from 'react'
import { useLocation } from 'react-router-dom'

import { useEventHandlers, useLocationUpdate } from './utils'

import { SearchForm, SearchIcon, ToggleWrapper } from './components'

import './SearchBarPlus.styles.scss'

const SearchBarPlus = () => {
  const { pathname } = useLocation()

  const updateLocation = useLocationUpdate(pathname)

  const { handleClick, handleKeyUp } = useEventHandlers(updateLocation)

  return (
    <ToggleWrapper>
      <div className="search_bar">
        <SearchIcon />
        <SearchForm
          handleClick={handleClick}
          handleKeyUp={handleKeyUp}
        />
      </div>
    </ToggleWrapper>
  )
}

export default SearchBarPlus
