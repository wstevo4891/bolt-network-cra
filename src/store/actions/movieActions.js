// Types
// ==================================================================
import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../types'


// Dispatch Functions
// ==================================================================
export const fetchMovieBegin = () => ({
  type: FETCH_MOVIE_BEGIN
})

export const fetchMovieSuccess = (movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: { movie }
})

export const fetchMovieFailure = (error) => ({
  type: FETCH_MOVIE_FAILURE,
  payload: { error }
})
