import { API_URL } from '../constants'

import {
  fetchSuggestionsBegin,
  fetchSuggestionsFailure,
  fetchSuggestionsSuccess,
  resetSuggestions,
} from './actions'

const URI = `${API_URL}/search/suggestions`

function fetchSuggestions(suggestionId) {
  return async (dispatch) => {
    try {
      dispatch(fetchSuggestionsBegin())

      const response = await fetch(`${URI}/${suggestionId}`)

      const data = await response.json()

      dispatch(fetchSuggestionsSuccess(data))
    } catch(error) {
      dispatch(fetchSuggestionsFailure(error))
    }
  }
}

function reset() {
  return async (dispatch) => dispatch(resetSuggestions())
}

export default {
  fetchSuggestions,
  reset,
}
