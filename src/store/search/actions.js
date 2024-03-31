import {
  FETCH_SEARCH_RESULTS_BEGIN,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_FAILURE
} from './types'

export const fetchSearchResultsBegin = () => ({
  type: FETCH_SEARCH_RESULTS_BEGIN
})

export const fetchSearchResultsSuccess = searchResults => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: { searchResults }
})

export const fetchSearchResultsFailure = error => ({
  type: FETCH_SEARCH_RESULTS_FAILURE,
  payload: { error }
})
