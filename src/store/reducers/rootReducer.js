import { combineReducers } from 'redux'

import moviesIndex from './moviesIndexReducer'
import carouselMovies from './carouselMoviesReducer'
import search from './searchReducer'
import counter from './counterReducer'

export default combineReducers({
  moviesIndex,
  carouselMovies,
  search,
  counter
})
