import {
  FETCH_GENRES_BEGIN,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE
} from '../../types'

import { errorState, loadingState } from '../utils'

import { INITIAL_STATE } from './constants'

export default function listReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_GENRES_BEGIN:
      return loadingState(state)
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        list: action.payload.genres,
      }
    case FETCH_GENRES_FAILURE:
      return errorState(state, action)
    default:
      return state
  }
}
