import {
  fetchSearchResultsBegin,
  fetchSearchResultsFailure,
  fetchSearchResultsSuccess
} from '../actions'

import { API_URL } from './constants'

function fetchResults(query) {
  return async (dispatch) => {
    try {
      if (query === '') return

      dispatch(fetchSearchResultsBegin())

      const response = await fetch(`${API_URL}/search/${query}`)

      const data = await response.json()

      dispatch(fetchSearchResultsSuccess(data))
    } catch(error) {
      dispatch(fetchSearchResultsFailure(error))
    }
  }
}

export function mapStateToProps(state) {
  const { genres, movies, people } = state.search

  return {
    results: {
      genres,
      movies,
      people,
    },
  }
}

function selectResults(state) {
  const { genres, movies, people } = state.search

  return { genres, movies, people }
}

export default {
  fetchResults,
  selectResults,
}
