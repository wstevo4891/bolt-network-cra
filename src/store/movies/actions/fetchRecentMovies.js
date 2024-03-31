import {
  FETCH_RECENT_MOVIES_BEGIN,
  FETCH_RECENT_MOVIES_SUCCESS,
  FETCH_RECENT_MOVIES_FAILURE
} from '../types'

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
