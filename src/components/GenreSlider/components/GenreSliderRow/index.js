import React from 'react'
import PropTypes from 'prop-types'

import './GenreSliderRow.styles.scss'

const GenreSliderRow = ({ children, genre }) => (
  <div id={`${genre}_row`} className='genre-slider-row'>
    {children}
  </div>
)

GenreSliderRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  genre: PropTypes.string.isRequired,
}

export default GenreSliderRow
