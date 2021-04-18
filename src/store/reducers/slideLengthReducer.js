// Genres Reducer

// Constants
// ==================================================================
import {
  SET_SLIDE_LENGTH_BEGIN,
  SET_SLIDE_LENGTH_SUCCESS,
  SET_SLIDE_LENGTH_FAILURE
} from '../types'

const initialState = {
  value: null,
  loading: false,
  error: null
}

export default function slideLengthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SLIDE_LENGTH_BEGIN:
      return {
        ...state,
        loading: true
      }

    case SET_SLIDE_LENGTH_SUCCESS:
      return {
        ...state,
        value: action.payload.slideLength,
      }

    case SET_SLIDE_LENGTH_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}
