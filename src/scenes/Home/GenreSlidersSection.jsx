import PropTypes from 'prop-types'
import React from 'react'

import { GenreSlider } from 'components'

const GenreSlidersSection = ({ genres }) => (
  <section className='genre-sliders-container'>
    {genres.map((genre, index) => (
      <GenreSlider key={index} genre={genre} />
    ))}
  </section>
)

GenreSlidersSection.propTypes = {
  genres: PropTypes.array.isRequired
}

export default GenreSlidersSection
