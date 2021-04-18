import React from 'react'
import PropTypes from 'prop-types'

import './DisplayContainer.styles.scss'

const DisplayContainer = ({ children }) => (
  <div className="display-container">
    {children}
  </div>
)

DisplayContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.element,
    PropTypes.object,
  ])
}

export default DisplayContainer
