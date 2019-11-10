// app/javascript/main/scenes/Genre/components/GenreDisplay.jsx

import React, { Component } from 'react'
import API from './services/API'

import Results from '../../components/Results'

export default class Genre extends Component {
  state = {
    genre: null,
    movies: null
  }

  render() {
    const { genre, movies } = this.state

    if (genre === null) return null

    return(
      <div className="display-container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 style={{ color: 'white' }}>{genre.title}</h1>
          </div>
        </div>

        <Results
          movies={movies}
          slideLength={this.props.slideLength}
        />
      </div>
    )
  }

  componentDidMount() {
    const genreSlug = this.props.match.params.slug

    let genreData = sessionStorage.getItem(`Genre_${genreSlug}`)

    if (genreData === null) {
      this.fetchGenre(genreSlug)

    } else {
      genreData = JSON.parse(genreData)

      this.setState({
        genre: genreData.genre,
        movies: genreData.movies
      })
    }
  }

  fetchGenre = (genreSlug) => {
    API.genres.show(genreSlug)
      .then(response => {
        sessionStorage.setItem(
          `Genre_${genreSlug}`,
          JSON.stringify(response.data)
        )

        this.setState({
          genre: response.data.genre,
          movies: response.data.movies
        })
      })
      .catch(error => {
        console.error('Error in Genre.fetchMovies()')
        console.error(error)
      })
  }
}
