import React from 'react'
import PropTypes from 'prop-types'

import './SearchInput.styles.scss'

const SearchInput = React.forwardRef((props, ref) => {
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
      ref={ref}
      type="text"
    />
  )
})

SearchInput.propTypes = {
  extraClass: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
}

SearchInput.defaultProps = {
  extraClass: 'desktop_input',
}

export default SearchInput
