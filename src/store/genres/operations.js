import { API_URL } from '../constants'

import {
  fetchGenresBegin,
  fetchGenresSuccess,
  fetchGenresFailure,
  fetchGenreMoviesBegin,
  fetchGenreMoviesSuccess,
  fetchGenreMoviesFailure,
  setGenresIndex
} from './actions'

function fetchGenres() {
  return async (dispatch) => {
    try {
      dispatch(fetchGenresBegin())

      const response = await fetch(`${API_URL}/genres`)

      const genres = await response.json()

      dispatch(fetchGenresSuccess(genres))

      dispatch(setGenresIndex(genres))

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
  fetchMovies,
  fetch: fetchGenres,
}
