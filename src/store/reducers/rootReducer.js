import { combineReducers } from 'redux'

import bannerMoviesReducer from './bannerMoviesReducer'
import carouselMoviesReducer from './carouselMoviesReducer'
import counterReducer from './counterReducer'
import genresListReducer from './genresListReducer'
import genresIndexReducer from './genresIndexReducer'
// import moviesIndexReducer from './moviesIndexReducer'
// import recentMoviesReducer from './recentMoviesReducer'
import moviesReducer from './moviesReducer'
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
  movies: moviesReducer,
  search: searchReducer,
  slideLength: slideLengthReducer
})
