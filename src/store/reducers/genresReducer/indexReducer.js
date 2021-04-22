import { SET_GENRES_INDEX } from '../../types'

import { INITIAL_STATE } from './constants'

import indexMoviesReducer from './indexMoviesReducer'

export function buildGenresIndex(genres) {
  const index = {}

  for (let genre of genres) {
    index[genre.slug] = genre
  }

  return index
}

export default function indexReducer(state = INITIAL_STATE, action) {
  if (action.type !== SET_GENRES_INDEX) {
    return indexMoviesReducer(state, action)
  }

  const index = buildGenresIndex(action.payload.genres)

  return {
    ...state,
    index,
  }
}
