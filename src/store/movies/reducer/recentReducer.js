import {
  FETCH_RECENT_MOVIES_BEGIN,
  FETCH_RECENT_MOVIES_SUCCESS,
  FETCH_RECENT_MOVIES_FAILURE
} from '../types'

import { errorState, loadingState } from '../utils'

import { INITIAL_STATE } from './constants'

export default function recentReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_RECENT_MOVIES_BEGIN:
      return loadingState(state)

    case FETCH_RECENT_MOVIES_SUCCESS:
      return {
        ...state,
        recent: action.payload.movies
      }

    case FETCH_RECENT_MOVIES_FAILURE:
      return errorState(state, action)

    default:
      return state
  }
}
