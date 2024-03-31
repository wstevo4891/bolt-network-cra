import { INITIAL_STATE, TYPES } from './constants'

import indexReducer from './indexReducer'
import recentReducer from './recentReducer'

export default function moviesReducer(state = INITIAL_STATE, action) {
  if (TYPES.INDEX[action.type]) {
    return indexReducer(state, action)
  } else if (TYPES.RECENT[action.type]) {
    return recentReducer(state, action)
  } else {
    return state
  }
}
