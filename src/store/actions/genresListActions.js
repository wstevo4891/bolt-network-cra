// Types
// ==================================================================
import {
  FETCH_GENRES_BEGIN,
  FETCH_GENRES_SUCCESS,
  FETCH_GENRES_FAILURE
} from '../types'


// Dispatch Functions
// ==================================================================
export const fetchGenresBegin = () => ({
  type: FETCH_GENRES_BEGIN
})

export const fetchGenresSuccess = (genres) => ({
  type: FETCH_GENRES_SUCCESS,
  payload: { genres }
})

export const fetchGenresFailure = (error) => ({
  type: FETCH_GENRES_FAILURE,
  payload: { error }
})
