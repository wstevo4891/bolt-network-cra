import PropTypes from 'prop-types'
import React from 'react'

import './LabelledLine.styles.scss'

const LabelledLine = ({ children, label }) => (
  <p>
    <span className="label">{label}:&nbsp;</span>
    {children}
  </p>
)

LabelledLine.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
  label: PropTypes.string.isRequired,
}

export default LabelledLine
