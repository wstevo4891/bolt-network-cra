import React from 'react'
import { useLocation } from 'react-router-dom'

import { useEventHandlers } from './utils'

import { SearchForm, SearchIcon, ToggleWrapper } from './components'

import './SearchBar.styles.scss'

const SearchBar = () => {
  const { pathname } = useLocation()

  const [handleClick, handleKeyUp] = useEventHandlers(pathname)

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

export default SearchBar
