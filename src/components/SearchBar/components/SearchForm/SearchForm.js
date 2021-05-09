import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { SearchClose, SearchInput } from '..'

import { useEventHandlers } from './hooks'

const SearchForm = ({ location }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  const [handleClick, handleKeyUp, updateLocation] = useEventHandlers(location)

  const clearSearch = () => {
    setQuery('')
    updateLocation()
  }

  return (
    <div className="form-inline">
      <SearchInput
        extraClass="desktop_input"
        handleChange={handleChange}
        handleClick={handleClick}
        handleKeyUp={handleKeyUp}
        placeholder="Titles, people, genres"
        query={query}
      />
  
      <SearchInput
        extraClass="mobile_input"
        handleChange={handleChange}
        handleClick={handleClick}
        handleKeyUp={handleKeyUp}
        placeholder="Search"
        query={query}
      />
  
      <SearchClose query={query} handleClick={clearSearch} />
    </div>
  )
}

SearchForm.propTypes = {
  location: PropTypes.string.isRequired,
}

export default SearchForm
