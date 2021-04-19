import {
  FETCH_SUGGESTIONS_BEGIN,
  FETCH_SUGGESTIONS_SUCCESS,
  FETCH_SUGGESTIONS_FAILURE,
  RESET_SUGGESTIONS
} from '../types'

export const fetchSuggestionsBegin = () => ({
  type: FETCH_SUGGESTIONS_BEGIN
})

export const fetchSuggestionsSuccess = (suggestions) => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  payload: { suggestions }
})

export const fetchSuggestionsFailure = (error) => ({
  type: FETCH_SUGGESTIONS_FAILURE,
  payload: { error }
})

export const resetSuggestions = () => ({
  type: RESET_SUGGESTIONS
})
