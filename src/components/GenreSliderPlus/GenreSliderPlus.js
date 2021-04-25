import PropTypes from 'prop-types'
import React from 'react'

import { API_URL } from 'store'

import { noop } from 'utils'

import Slider from '../Slider'

import { Header, PaginationList } from './components'

import { findNextPage, PAGE_LIMITS } from './utils'

import './GenreSlider.styles.scss'

const URI = `${API_URL}/movies/paginated-list`

class GenreSliderPlus extends React.Component {
  state = {
    page: 0,
    movies: null
  }

  render() {
    const { page, movies } = this.state
    const { genre, slideLength } = this.props

    if (!Array.isArray(movies)) return null

    const pageCount = PAGE_LIMITS[slideLength]

    const rowID = `${genre.title}_Genre_Row`

    return (
      <div id={rowID} className="genre_slider">
        <PaginationList page={page} pageCount={pageCount} />

        <Header title={genre.title} url={genre.url} />

        <Slider
          fetchNextSlides={this.fetchNextMovies}
          name={genre.title}
          slides={movies}
        />
      </div>
    )
  }

  componentDidMount() {
    this.fetchGenreMovies(this.state.page).then((movies) => {
      this.setState({ page: 1, movies })
    })
  }

  async fetchGenreMovies(page) {
    try {
      const { genre, slideLength } = this.props

      const response = await fetch(`${URI}/${genre.id}/${slideLength}/${page}`)

      const movies = await response.json()

      return movies
    } catch(error) {
      console.error(error.message)
    }
  }

  fetchNextMovies = (direction, callback = noop) => {
    try {
      const currentPage = this.state.page
      const { slideLength } = this.props
      const page = findNextPage(currentPage, direction, slideLength)

      this.fetchGenreMovies(page).then((movies) => {
        this.setState({ page, movies }, callback)
      })
    } catch(error) {
      console.error(error)
    }
  }
}

GenreSliderPlus.propTypes = {
  genres: PropTypes.object.isRequired,
  slideLength: PropTypes.number.isRequired,
}

export default GenreSliderPlus
