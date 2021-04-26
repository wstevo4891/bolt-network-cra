import PropTypes from 'prop-types'
import React from 'react'

import './ContentRow.styles.scss'

const ContentRow = ({ children }) => (
  <div className="content-row">
    {children}
  </div>
)

ContentRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

export default ContentRow
