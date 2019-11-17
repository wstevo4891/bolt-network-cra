// app/javascript/main/scenes/Home/GenreSliders/components/GenreSliderRow.jsx

import React, { Component } from 'react'

// Services
import MoviesList from './services/MoviesList'

// Styles
import './styles/index.scss'

// Components
import Slider from './components/Slider'

export default class GenreSlider extends Component {
  state = {
    slideLength: null,
    moviesList: null
  }

  static getDerivedStateFromProps(props, state) {
    if (props.slideLength === state.slideLength) return null

    const moviesList = new MoviesList(props).call()

    return {
      slideLength: props.slideLength,
      moviesList: moviesList
    }
  }

  render() {
    const moviesList = this.state.moviesList
    const { genre, slideLength } = this.props

    if (moviesList === null) return null

    return (
      <div id={`${genre.title}_row`} className='genre-slider-row'>
        <h2 className='rowHeader'>
          <a className='rowTitle' href={`/genres/${genre.toLowerCase()}`}>
            <div className='row-header-title'>{genre}</div>
          </a>
        </h2>

        <Slider
          genre={genre}
          moviesList={moviesList}
          slideLength={slideLength}
        />
      </div>
    )
  }

  componentDidMount() {
    const moviesList = new MoviesList(this.props).call()

    this.setState({
      slideLength: this.props.slideLength,
      moviesList: moviesList
    })
  }
}
