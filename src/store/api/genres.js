import {
  fetchGenresBegin,
  fetchGenresSuccess,
  fetchGenresFailure,
  fetchGenreMoviesBegin,
  fetchGenreMoviesSuccess,
  fetchGenreMoviesFailure,
  setGenresIndex
} from '../actions'

import { API_URL } from './constants'

function fetchGenres() {
  return async (dispatch) => {
    try {
      dispatch(fetchGenresBegin())

      const response = await fetch(`${API_URL}/genres`)

      const data = await response.json()

      dispatch(fetchGenresSuccess(data))

      dispatch(setGenresIndex(data))

    } catch(error) {
      dispatch(fetchGenresFailure(error))
    }
  }
}

function fetchMovies(genreId) {
  return async (dispatch) => {
    try {
      dispatch(fetchGenreMoviesBegin())

      const response = await fetch(`${API_URL}/movies/by-genre/${genreId}`)

      const { genre, movies } = await response.json()

      dispatch(fetchGenreMoviesSuccess(genre, movies))
    } catch(error) {
      dispatch(fetchGenreMoviesFailure(error))
    }
  }
}

export default {
  fetch: fetchGenres,
  fetchMovies
}
