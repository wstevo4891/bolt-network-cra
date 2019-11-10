// app/javascript/main/scenes/Genre/components/GenreDisplay.jsx

import React, { Component } from 'react'
import API from './services/API'

import Results from '../../components/Results'

export default class GenreDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideLength: this.props.slideLength,
      genre: null,
      movies: null
    }
  }

  componentWillReceiveProps(nextProps) {    
    const genreSlug = nextProps.match.params.slug

    if (genreSlug === this.state.genre.slug.toString()) {
      if (this.state.slideLength === nextProps.slideLength) return
      
      this.setState({
        slideLength: nextProps.slideLength
      })

    } else {
      let genreData = sessionStorage.getItem(`Genre_${genreSlug}`)

      if (genreData === null) {
        this.fetchGenre(genreSlug, nextProps.slideLength)
  
      } else {
        genreData = JSON.parse(genreData)
  
        this.setState({
          genre: genreData.genre,
          movies: genreData.movies
        })
      }
    }
  }

  render() {
    const { slideLength, genre, movies } = this.state

    if (genre === null) return null

    return(
      <div className="display-container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 style={{ color: 'white' }}>{genre.title}</h1>
          </div>
        </div>

        <Results movies={movies} slideLength={slideLength} />
      </div>
    )
  }

  componentDidMount() {
    const genreSlug = this.props.match.params.slug

    let genreData = sessionStorage.getItem(`Genre_${genreSlug}`)

    if (genreData === null) {
      this.fetchGenre(genreSlug, this.state.slideLength)

    } else {
      genreData = JSON.parse(genreData)

      this.setState({
        genre: genreData.genre,
        movies: genreData.movies
      })
    }
  }

  fetchGenre = (genreSlug, slideLength) => {
    API.genres.show(genreSlug)
      .then(response => {
        sessionStorage.setItem(`Genre_${genreSlug}`, JSON.stringify(response.data))

        this.setState({
          slideLength: slideLength,
          genre: response.data.genre,
          movies: response.data.movies
        })
      })
      .catch(error => {
        console.error('Error in GenreDisplay.fetchMovies()')
        console.error(error)
      })
  }
}
