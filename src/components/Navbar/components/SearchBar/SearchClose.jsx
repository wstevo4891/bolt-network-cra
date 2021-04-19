import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from 'components'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchClose = ({ handleClick, query }) => {
  if (!query) return null

  const buttonProps = {
    handleClick,
    ariaHidden: 'true',
    id: 'closeIcon',
  }

  return (
    <IconButton
      buttonProps={buttonProps}
      icon={faTimes}
    />
  )
}

SearchClose.propTypes = {
  handleClick: PropTypes.func.isRequired,
  query: PropTypes.bool,
}

SearchClose.defaultProps = {
  query: false,
}

export default SearchClose
