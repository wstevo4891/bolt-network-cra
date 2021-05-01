import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { SearchClose, SearchInput } from '..'

const SearchForm = ({ handleClick, handleKeyUp }) => {
  const [query, setQuery] = useState('')

  const handleChange = (event) => setQuery(event.target.value)

  const clearSearch = () => setQuery('')

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
  
      <SearchClose
        handleClick={clearSearch}
        query={query}
      />
    </div>
  )
}

SearchForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
}

export default SearchForm
