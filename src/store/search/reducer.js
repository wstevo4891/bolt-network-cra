import { errorState, loadingState } from 'utils'

import {
  FETCH_SEARCH_RESULTS_BEGIN,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_FAILURE
} from './types'

const initialState = {
  error: null,
  genres: [],
  loading: false,
  movies: [],
  people: [],
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_BEGIN:
      return loadingState(state)

    case FETCH_SEARCH_RESULTS_SUCCESS:
      const { genres, movies, people } = action.payload.searchResults

      return {
        ...state,
        genres,
        movies,
        people,
      }

    case FETCH_SEARCH_RESULTS_FAILURE:
      return errorState(state, action)

    default:
      return state
  }
}
