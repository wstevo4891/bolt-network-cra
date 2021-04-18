import { combineReducers } from 'redux'

import bannerMoviesReducer from './bannerMoviesReducer'
import carouselMoviesReducer from './carouselMoviesReducer'
import counterReducer from './counterReducer'
import genresListReducer from './genresListReducer'
import genresIndexReducer from './genresIndexReducer'
import moviesIndexReducer from './moviesIndexReducer'
import recentMoviesReducer from './recentMoviesReducer'
import searchReducer from './searchReducer'
import slideLengthReducer from './slideLengthReducer'

export default combineReducers({
  bannerMovies: bannerMoviesReducer,
  carouselMovies: carouselMoviesReducer,
  counter: counterReducer,
  genres: {
    index: genresIndexReducer,
    list: genresListReducer,
  },
  moviesIndex: moviesIndexReducer,
  recentMovies: recentMoviesReducer,
  search: searchReducer,
  slideLength: slideLengthReducer
})
