import PropTypes from 'prop-types'
import React from 'react'

const Logo = ({ source, title }) => (
  <img
    src={source}
    className="img-fluid movie-logo"
    alt={`${title} logo`}
  />
)

Logo.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Logo
