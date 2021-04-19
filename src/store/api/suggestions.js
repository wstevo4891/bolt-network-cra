import {
  fetchSuggestionsBegin,
  fetchSuggestionsFailure,
  fetchSuggestionsSuccess
} from '../actions'

import { API_URL } from './constants'

function fetchSuggestions(suggestionId) {
  return async (dispatch) => {
    try {
      dispatch(fetchSuggestionsBegin())

      const response = await fetch(`${API_URL}/search/suggestions/${suggestionId}`)

      const data = await response.json()

      dispatch(fetchSuggestionsSuccess(data))    
    } catch(error) {
      dispatch(fetchSuggestionsFailure(error))
    }
  }
}

export default {
  fetch: fetchSuggestions,
}
