import PropTypes from 'prop-types'
import React from 'react'

import Content from './Content'
import Logo from './Logo'

const MovieContent = ({ movie }) => (
  <div className="slide-info d-none d-sm-block">
    <Logo source={movie.logo} title={movie.title} />
    <Content movie={movie} />
  </div>
)

MovieContent.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MovieContent
