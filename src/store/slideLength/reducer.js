import { loadingState, errorState } from 'utils'

import {
  SET_SLIDE_LENGTH_BEGIN,
  SET_SLIDE_LENGTH_SUCCESS,
  SET_SLIDE_LENGTH_FAILURE
} from './types'

const initialState = {
  error: null,
  loading: false,
  value: null,
}

export default function slideLengthReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SLIDE_LENGTH_BEGIN:
      return loadingState(state)

    case SET_SLIDE_LENGTH_SUCCESS:
      return {
        ...state,
        value: action.payload.slideLength,
      }

    case SET_SLIDE_LENGTH_FAILURE:
      return errorState(state, action)

    default:
      return state
  }
}
