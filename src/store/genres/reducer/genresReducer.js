import { INITIAL_STATE, TYPES } from './constants'

import indexReducer from './indexReducer'
import listReducer from './listReducer'

export default function genresReducer(state = INITIAL_STATE, action) {
  if (TYPES.INDEX[action.type]) {
    return indexReducer(state, action)
  } else if (TYPES.LIST[action.type]) {
    return listReducer(state, action)
  } else {
    return state
  }
}
