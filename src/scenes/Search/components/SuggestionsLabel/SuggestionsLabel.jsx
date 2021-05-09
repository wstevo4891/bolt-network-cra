import PropTypes from 'prop-types'
import React from 'react'

import './SuggestionsLabel.styles.scss'

const SuggestionsLabel = ({ children }) => (
  <span className="suggestionsLabel">
    {children}
  </span>
)

SuggestionsLabel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
}

export default SuggestionsLabel
