import {
  fetchMovieBegin,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchRecentMoviesBegin,
  fetchRecentMoviesSuccess,
  fetchRecentMoviesFailure
} from '../actions'

import { API_URL } from './constants'

function fetchRecentMovies() {
  return async (dispatch) => {
    try {
      dispatch(fetchRecentMoviesBegin())

      const response = await fetch(`${API_URL}/movies/recent`)

      const data = await response.json()

      dispatch(fetchRecentMoviesSuccess(data))

      return data

    } catch(error) {
      dispatch(fetchRecentMoviesFailure(error))
    }
  }
}

function fetchMovie(movieId) {
  return async (dispatch) => {
    try {
      dispatch(fetchMovieBegin())

      const response = await fetch(`${API_URL}/movies/${movieId}`)

      const movie = await response.json()

      dispatch(fetchMovieSuccess(movie))
    } catch(error) {
      dispatch(fetchMovieFailure(error))
    }
  }
}

export default {
  fetch: fetchMovie,
  fetchRecent: fetchRecentMovies
}
