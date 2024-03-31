import {
  FETCH_BANNER_MOVIES_BEGIN,
  FETCH_BANNER_MOVIES_SUCCESS,
  FETCH_BANNER_MOVIES_FAILURE
} from './types'

const initialState = {
  error: null,
  loading: false,
  value: [],
}

export default function bannerMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BANNER_MOVIES_BEGIN:
      return {
        ...state,
        loading: true
      }
    case FETCH_BANNER_MOVIES_SUCCESS:
      return {
        ...state,
        value: action.payload.movies
      }
    case FETCH_BANNER_MOVIES_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
