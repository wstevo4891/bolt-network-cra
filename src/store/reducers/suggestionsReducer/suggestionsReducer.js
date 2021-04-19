import { RESET_SUGGESTIONS } from '../../types'

import fetchReducer from './fetchReducer'

import { INITIAL_STATE } from './constants'

export default function suggestionsReducer(state = INITIAL_STATE, action) {
  if (action.type === RESET_SUGGESTIONS) {
    return INITIAL_STATE
  } else {
    return fetchReducer(state, action)
  }
}
