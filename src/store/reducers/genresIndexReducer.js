import {
  FETCH_GENRE_MOVIES_BEGIN,
  FETCH_GENRE_MOVIES_SUCCESS,
  FETCH_GENRE_MOVIES_FAILURE,
  SET_GENRES_INDEX
} from '../types'

import { errorState, loadingState } from './utils'

export const initialState = {
  error: null,
  loading: false,
  value: {}
}

export function buildGenresIndex(genres) {
  const index = {}

  for (let genre of genres) {
    index[genre.slug] = genre
  }

  return index
}

export function setGenresIndex(state, action) {
  const { genres } = action.payload

  const index = buildGenresIndex(genres)

  return {
    ...state,
    index
  }
}

export function setGenreMovies(state, action) {
  const { genre, movies } = action.payload

  const index = {
    ...state.index,
    [genre.slug]: {
      ...genre,
      movies,
    }
  }

  return {
    ...state,
    index,
  }
}

export function fetchGenreMovies(state, action) {
  switch(action.type) {
    case FETCH_GENRE_MOVIES_BEGIN:
      return loadingState(state)
    case FETCH_GENRE_MOVIES_SUCCESS:
      return setGenreMovies(state, action)
    case FETCH_GENRE_MOVIES_FAILURE:
      return errorState(state, action)
    default:
      return state
  }
}

export default function genresIndexReducer(state = initialState, action) {
  if (action.type === SET_GENRES_INDEX) {
    return setGenresIndex(state, action)
  } else {
    return fetchGenreMovies(state, action)
  }
}
