import { errorState, loadingState } from 'utils'

import {
  FETCH_GENRE_MOVIES_BEGIN,
  FETCH_GENRE_MOVIES_SUCCESS,
  FETCH_GENRE_MOVIES_FAILURE,
} from '../types'

import { INITIAL_STATE } from './constants'

export function setIndexMovies(state, action) {
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

export default function indexMoviesReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_GENRE_MOVIES_BEGIN:
      return loadingState(state)
    case FETCH_GENRE_MOVIES_SUCCESS:
      return setIndexMovies(state, action)
    case FETCH_GENRE_MOVIES_FAILURE:
      return errorState(state, action)
    default:
      return state
  }
}