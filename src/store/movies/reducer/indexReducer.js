import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE
} from '../types'

import { errorState, loadingState } from '../utils'

import { INITIAL_STATE } from './constants'

export default function indexReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MOVIE_BEGIN:
      return loadingState(state)

    case FETCH_MOVIE_SUCCESS:
      const { movie } = action.payload
      const index = {
        ...state.index,
        [movie.id]: movie
      }
      return {
        ...state,
        index
      }

    case FETCH_MOVIE_FAILURE:
      return errorState(state, action)

    default:
      return state
  }
}
