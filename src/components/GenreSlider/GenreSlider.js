import PropTypes from 'prop-types'
import React from 'react'

import Slider from '../Slider'

import { Header, PaginationList } from './components'
import { useGenreSliderState } from './hooks'
import { PAGE_LIMITS } from './utils'

import './GenreSlider.styles.scss'

const GenreSlider = ({ genre, slideLength }) => {
  const [fetchMovies, { page, movies }] = useGenreSliderState(genre, slideLength)

  if (movies === null) return null

  return (
    <div id={`${genre.title}_Genre_Row`} className="genre_slider">
      <PaginationList page={page} pageCount={PAGE_LIMITS[slideLength]} />

      <Header title={genre.title} url={genre.url} />

      <Slider
        fetchSlides={fetchMovies}
        name={genre.title}
        slides={movies}
      />
    </div>
  )
}

GenreSlider.propTypes = {
  genre: PropTypes.object.isRequired,
  slideLength: PropTypes.number.isRequired,
}

export default GenreSlider
