import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

import { API } from 'store'

import { GenreSlider } from 'components'

const GenreSlidersSection = ({ genres }) => {
  const slideLength = useSelector(API.slideLength.get)

  return (
    <section className='genre-sliders-container'>
      {genres.map((genre, index) => (
        <GenreSlider genre={genre} key={index} slideLength={slideLength} />
      ))}
    </section>
  )
}

GenreSlidersSection.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default GenreSlidersSection
