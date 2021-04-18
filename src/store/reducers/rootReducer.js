import { combineReducers } from 'redux'

import bannerMoviesReducer from './bannerMoviesReducer'
import carouselMoviesReducer from './carouselMoviesReducer'
import genresReducer from './genresReducer'
import moviesReducer from './moviesReducer'
import searchReducer from './searchReducer'
import slideLengthReducer from './slideLengthReducer'

export default combineReducers({
  bannerMovies: bannerMoviesReducer,
  carouselMovies: carouselMoviesReducer,
  genres: genresReducer,
  movies: moviesReducer,
  search: searchReducer,
  slideLength: slideLengthReducer
})
