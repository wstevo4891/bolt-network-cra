import React from 'react'
import PropTypes from 'prop-types'

import { IconButton } from 'components'

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './ClearSearchButton.styles.scss'

const ClearSearchButton = ({ query, handleClick }) => {
  if (query === '') return null

  const buttonProps = {
    handleClick,
    buttonClass: 'search_close',
  }

  return <IconButton buttonProps={buttonProps} icon={faTimes} />
}

ClearSearchButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  query: PropTypes.string,
}

ClearSearchButton.defaultProps = {
  query: '',
}

export default ClearSearchButton
