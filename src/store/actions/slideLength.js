// Recent Movies Actions

// Types
// ==================================================================
import {
  SET_SLIDE_LENGTH_BEGIN,
  SET_SLIDE_LENGTH_SUCCESS,
  SET_SLIDE_LENGTH_FAILURE,
} from '../types'


// Dispatch Functions
// ==================================================================
export const setSlideLengthBegin = () => ({
  type: SET_SLIDE_LENGTH_BEGIN
})

export const setSlideLengthSuccess = slideLength => ({
  type: SET_SLIDE_LENGTH_SUCCESS,
  payload: { slideLength }
})

export const setSlideLengthFailure = error => ({
  type: SET_SLIDE_LENGTH_FAILURE,
  payload: { error }
})
