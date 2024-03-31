// Banner Movies Actions

// Types
// ========================================================
import {
  FETCH_BANNER_MOVIES_BEGIN,
  FETCH_BANNER_MOVIES_SUCCESS,
  FETCH_BANNER_MOVIES_FAILURE
} from './types'

// Dispatch Actions
// ========================================================
export const fetchBannerMoviesBegin = () => ({
  type: FETCH_BANNER_MOVIES_BEGIN
})

export const fetchBannerMoviesSuccess = movies => ({
  type: FETCH_BANNER_MOVIES_SUCCESS,
  payload: { movies }
})

export const fetchBannerMoviesFailure = error => ({
  type: FETCH_BANNER_MOVIES_FAILURE,
  payload: { error }
})
