import {
  FETCH_GENRE_MOVIES_BEGIN,
  FETCH_GENRE_MOVIES_SUCCESS,
  FETCH_GENRE_MOVIES_FAILURE,
  SET_GENRES_INDEX
} from '../types'

export const fetchGenreMoviesBegin = () => ({
  type: FETCH_GENRE_MOVIES_BEGIN
})

export const fetchGenreMoviesSuccess = (genre, movies) => ({
  type: FETCH_GENRE_MOVIES_SUCCESS,
  payload: { genre, movies }
})

export const fetchGenreMoviesFailure = error => ({
  type: FETCH_GENRE_MOVIES_FAILURE,
  payload: { error }
})

export const setGenresIndex = (genres) => ({
  type: SET_GENRES_INDEX,
  payload: { genres }
})
