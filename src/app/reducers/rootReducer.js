import { combineReducers } from 'redux'

import moviesIndex from './moviesIndexReducer'
import counter from './counterReducer'

export default combineReducers({
  moviesIndex,
  counter
})
