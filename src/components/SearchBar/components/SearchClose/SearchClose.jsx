import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from 'components'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './SearchClose.styles.scss'

const SearchClose = ({ handleClick, queryState }) => {
  if (!queryState) return null

  const buttonProps = {
    handleClick,
    buttonClass: 'search_close',
  }

  return <IconButton buttonProps={buttonProps} icon={faTimes} />
}

SearchClose.propTypes = {
  handleClick: PropTypes.func.isRequired,
  queryState: PropTypes.bool,
}

SearchClose.defaultProps = {
  queryState: false,
}

export default SearchClose
