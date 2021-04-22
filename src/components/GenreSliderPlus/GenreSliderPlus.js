import PropTypes from 'prop-types'
import React from 'react'

import { API_URL } from 'store'

import { Slider } from '../Slider'

import { Header, PaginationList } from './components'

import { findNextPage, PAGE_LIMITS } from './utils'

const URI = `${API_URL}/movies/paginated-list`

class GenreSliderPlus extends React.Component {
  state = {
    page: 0,
    movies: null
  }

  render() {
    const { page, movies } = this.state
    const { genre, slideLength } = this.props

    if (movies === null) return null

    const pageCount = PAGE_LIMITS[slideLength]

    const rowID = `${genre.title}_row`

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
    const movies = this.fetchGenreMovies(this.state.page)

    this.setState({ page: 1, movies })
  }

  async fetchGenreMovies(page) {
    try {
      const { genre, slideLength } = this.props

      const response = await fetch(`${URI}/${genre.id}/${slideLength}/${page}`)

      const data = await response.json()

      return data
    } catch(error) {
      console.error(error.message)
    }
  }

  fetchNextMovies = (direction) => {
    const currentPage = this.state.page
    const { slideLength } = this.props

    const page = findNextPage(currentPage, direction, slideLength)

    const movies = this.fetchGenreMovies(page)

    this.setState({ page, movies })
  }
}

GenreSliderPlus.propTypes = {
  genres: PropTypes.object.isRequired,
  slideLength: PropTypes.number.isRequired,
}
