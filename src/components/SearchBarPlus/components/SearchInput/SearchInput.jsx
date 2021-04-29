import React from 'react'
import PropTypes from 'prop-types'

import './SearchInput.styles.scss'

const SearchInput = ((props) => {
  const inputClass = `form-control search_input ${props.extraClass}`

  return (
    <input
      aria-label="Search"
      className={inputClass}
      maxLength="80"
      name="query"
      onClick={props.handleClick}
      onKeyUp={props.handleKeyUp}
      placeholder={props.placeholder}
      type="text"
      value={props.query}
    />
  )
})

SearchInput.propTypes = {
  extraClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  query: PropTypes.string,
}

SearchInput.defaultProps = {
  extraClass: 'desktop_input',
}

export default SearchInput
