// Constants
// ==================================================================
import {
  FETCH_GENRES_BEGIN,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE
} from '../types'

import { errorState, loadingState } from './utils'

export const initialState = {
  error: null,
  value: [],
  loading: false
}

export const setGenres = (state, action) => ({
  ...state,
  value: action.payload.genres,
})

export default function genresReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES_BEGIN:
      return loadingState(state)
    case FETCH_GENRES_SUCCESS:
      return setGenres(state, action)
    case FETCH_GENRES_FAILURE:
      return errorState(state, action)
    default:
      return state
  }
}
