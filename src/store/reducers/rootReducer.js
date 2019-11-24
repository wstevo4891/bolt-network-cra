import { combineReducers } from 'redux'

import moviesIndex from './moviesIndexReducer'
import search from './searchReducer'
import counter from './counterReducer'

export default combineReducers({
  moviesIndex,
  search,
  counter
})
