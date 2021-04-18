import PropTypes from 'prop-types'
import React from 'react'

const Poster = ({ source, title }) => (
  <img
    src={source}
    className="img-fluid"
    alt={`${title} poster`}
  />
)

Poster.propTypes = {
  source: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Poster
