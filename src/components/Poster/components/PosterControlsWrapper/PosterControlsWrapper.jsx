import React from 'react'
import PropTypes from 'prop-types'

const PosterControlsWrapper = ({ children, hoverItem, slideItem }) => {
  if (hoverItem !== slideItem) return <span></span>

  return children
}

PosterControlsWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  hoverItem: PropTypes.number,
  slideItem: PropTypes.number.isRequired,
}

PosterControlsWrapper.defaultProps = {
  children: [],
  hoverItem: null,
}

export default PosterControlsWrapper
