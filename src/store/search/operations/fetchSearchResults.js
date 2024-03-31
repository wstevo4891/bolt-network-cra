import { API_URL } from '../../constants'

import {
  fetchSearchResultsBegin,
  fetchSearchResultsFailure,
  fetchSearchResultsSuccess
} from '../actions'

export default function fetchSearchResults(query) {
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