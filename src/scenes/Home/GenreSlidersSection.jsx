import PropTypes from 'prop-types'
import React from 'react'

import { GenreSliderPlus } from 'components'

const GenreSlidersSection = ({ genres }) => {
  return (
    <section className='genre-sliders-container'>
      {genres.map((genre, index) => (
        <GenreSliderPlus key={index} genre={genre} />
      ))}
    </section>
  )
}

GenreSlidersSection.propTypes = {
  genres: PropTypes.array.isRequired
}

export default GenreSlidersSection
