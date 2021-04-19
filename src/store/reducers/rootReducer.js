import { combineReducers } from 'redux'

import bannerMoviesReducer from './bannerMoviesReducer'
import genresReducer from './genresReducer'
import moviesReducer from './moviesReducer'
import searchReducer from './searchReducer'
import slideLengthReducer from './slideLengthReducer'
import suggestionsReducer from './suggestionsReducer'

export default combineReducers({
  bannerMovies: bannerMoviesReducer,
  genres: genresReducer,
  movies: moviesReducer,
  search: searchReducer,
  slideLength: slideLengthReducer,
  suggestions: suggestionsReducer,
})
