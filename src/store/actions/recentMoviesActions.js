// Recent Movies Actions

// Types
// ==================================================================
import {
  FETCH_RECENT_MOVIES_BEGIN,
  FETCH_RECENT_MOVIES_SUCCESS,
  FETCH_RECENT_MOVIES_FAILURE
} from '../types/recentMoviesTypes'


// Dispatch Functions
// ==================================================================
export const fetchRecentMoviesBegin = () => ({
  type: FETCH_RECENT_MOVIES_BEGIN
})

export const fetchRecentMoviesSuccess = movies => ({
  type: FETCH_RECENT_MOVIES_SUCCESS,
  payload: { movies }
})

export const fetchRecentMoviesFailure = error => ({
  type: FETCH_RECENT_MOVIES_FAILURE,
  payload: { error }
})


// Export Function
// ==================================================================
export const URI = 'http://localhost:3001/api/v1/recent-movies'

export function fetchRecentMovies() {
  return async dispatch => {
    try {
      dispatch(fetchRecentMoviesBegin())

      const response = await fetch(URI)

      const data = await response.json()

      dispatch(fetchRecentMoviesSuccess(data))

      return data

    } catch(error) {
      dispatch(fetchRecentMoviesFailure(error))
    }
  }
}
