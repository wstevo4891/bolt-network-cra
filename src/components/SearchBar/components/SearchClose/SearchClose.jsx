import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from 'components'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './SearchClose.styles.scss'

const SearchClose = ({ handleClick, queryState }) => {
  if (!queryState) return null

  return (
    <div className="search_close">
      <IconButton buttonProps={{ handleClick }} icon={faTimes} />
    </div>
  )
}

SearchClose.propTypes = {
  handleClick: PropTypes.func.isRequired,
  queryState: PropTypes.bool,
}

SearchClose.defaultProps = {
  queryState: false,
}

export default SearchClose
