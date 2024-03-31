import { RESET_SUGGESTIONS } from '../types'

import listReducer from './listReducer'

import { INITIAL_STATE } from './constants'

export default function suggestionsReducer(state = INITIAL_STATE, action) {
  if (action.type === RESET_SUGGESTIONS) {
    return INITIAL_STATE
  }

  return listReducer(state, action)
}
