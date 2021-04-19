import {
  FETCH_SUGGESTIONS_BEGIN,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE
} from '../../types'

import { errorState, loadingState } from '../utils'

import { INITIAL_STATE } from './constants'

export default function listReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_SUGGESTIONS_BEGIN:
      return loadingState(state)
    case FETCH_SUGGESTIONS_FAILURE:
      return errorState(state, action)
    case FETCH_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        list: action.payload.suggestions,
      }
    default:
      return state
  }
}
