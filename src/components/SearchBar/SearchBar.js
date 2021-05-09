import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { SearchForm, SearchIcon, ToggleWrapper } from './components'

import './SearchBar.styles.scss'

const SEARCH_PATH_REGEX = /\/search/

const SearchBar = () => {
  const { pathname } = useLocation()

  const [location, setLocation] = useState(pathname)

  useEffect(() => {
    const pathMatch = pathname.match(SEARCH_PATH_REGEX)

    if (pathMatch === null) {
      setLocation(pathname)
    }
  }, [pathname])

  return (
    <ToggleWrapper>
      <div className="search_bar">
        <SearchIcon />
        <SearchForm location={location} />
      </div>
    </ToggleWrapper>
  )
}

export default SearchBar
