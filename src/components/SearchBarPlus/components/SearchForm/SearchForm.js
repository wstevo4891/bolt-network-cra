import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useEventHandlers, useLocationUpdate } from './utils'

import { SearchClose, SearchInput } from '..'

const SearchForm = (props) => {
  const { pathname } = useLocation()
  const updateLocation = useLocationUpdate(pathname)

  const [query, setQuery] = useState('')
  const clearSearch = () => setQuery('', () => updateLocation())

  const { handleClick, handleKeyUp } = useEventHandlers(props, setQuery, updateLocation)

  return (
    <div className="form-inline">
      <SearchInput
        extraClass="desktop_input"
        handleClick={handleClick}
        handleKeyUp={handleKeyUp}
        placeholder="Titles, people, genres"
        query={query}
      />

      <SearchInput
        extraClass="mobile_input"
        handleClick={handleClick}
        handleKeyUp={handleKeyUp}
        placeholder="Search"
        query={query}
      />

      <SearchClose
        handleClick={clearSearch}
        query={query}
      />
    </div>
  )
}

SearchForm.propTypes = {
  fetchSearchResults: PropTypes.func.isRequired,
  resetSuggestions: PropTypes.func.isRequired,
}

export default SearchForm
