import PropTypes from 'prop-types'
import React from 'react'

import { GenreSlider } from 'components'

const GenreSlidersSection = ({ genres }) => {
  return (
    <section className='genre-sliders-container'>
      {genres.map((genre, index) => (
        <GenreSlider genre={genre} key={index} />
      ))}
    </section>
  )
}

GenreSlidersSection.propTypes = {
  genres: PropTypes.array.isRequired
}

export default GenreSlidersSection
