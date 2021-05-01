import PropTypes from 'prop-types'
import React from 'react'

import { SearchClose, SearchInput } from '..'

const SearchForm = ({ clearSearch, handleClick, handleKeyUp, query }) => (
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

SearchForm.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  query: PropTypes.string,
}

SearchForm.defaultProps = {
  query: '',
}

export default SearchForm
