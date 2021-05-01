import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useEventHandlers, useLocationUpdate } from './utils'

import { SearchForm, SearchIcon, ToggleWrapper } from './components'

import './SearchBarPlus.styles.scss'

const SearchBarPlus = () => {
  const { pathname } = useLocation()
  const updateLocation = useLocationUpdate(pathname)

  const [query, setQuery] = useState('')
  const clearSearch = () => setQuery('', () => updateLocation())

  const { handleClick, handleKeyUp } = useEventHandlers(setQuery, updateLocation)

  return (
    <ToggleWrapper>
      <div className="search_bar">
        <SearchIcon />
        <SearchForm
          clearSearch={clearSearch}
          handleClick={handleClick}
          handleKeyUp={handleKeyUp}
          query={query}
        />
      </div>
    </ToggleWrapper>
  )
}

export default SearchBarPlus
