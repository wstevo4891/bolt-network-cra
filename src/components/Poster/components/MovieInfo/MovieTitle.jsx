import React from 'react'
import PropTypes from 'prop-types'

const MAX_LENGTH = 40

const MovieTitle = ({ title }) => {
  if (title.length <= MAX_LENGTH) return <h3>{title}</h3>

  const text = title.substring(0, MAX_LENGTH) + '...'

  return <h3>{text}</h3>
}

MovieTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default MovieTitle
