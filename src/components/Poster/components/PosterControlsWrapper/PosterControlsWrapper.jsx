import React from 'react'
import PropTypes from 'prop-types'

const PosterControlsWrapper = ({ children, hoverItem, slideItem }) => {
  if (hoverItem !== slideItem) return <span></span>

  return <span>{children}</span>
}

PosterControlsWrapper.propTypes = {
  children: PropTypes.element,
  hoverItem: PropTypes.number,
  slideItem: PropTypes.number.isRequired,
}

PosterControlsWrapper.defaultProps = {
  children: null,
  hoverItem: null,
}

export default PosterControlsWrapper
