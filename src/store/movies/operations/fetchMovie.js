import { API_URL } from '../../constants'

import {
  fetchMovieBegin,
  fetchMovieSuccess,
  fetchMovieFailure,
} from '../actions'

export default function fetchMovie(movieId) {
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
