import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchIcon.styles.scss'

const SearchIcon = () => (
  <span className="search_icon" ariaHidden="true" >
    <FontAwesomeIcon icon={faSearch} />
  </span>
)

export default SearchIcon
