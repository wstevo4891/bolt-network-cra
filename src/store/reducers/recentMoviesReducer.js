// Recent Movies Reducer

// Types
// ==================================================================
import {
  FETCH_RECENT_MOVIES_BEGIN,
  FETCH_RECENT_MOVIES_SUCCESS,
  FETCH_RECENT_MOVIES_FAILURE
} from '../types'

const initialState = {
  error: null,
  list: [],
  loading: false
}

export default function recentMoviesReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_RECENT_MOVIES_BEGIN:
      return {
        ...state,
        loading: true
      }

    case FETCH_RECENT_MOVIES_SUCCESS:
      return {
        ...state,
        list: action.payload.movies
      }

    case FETCH_RECENT_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
