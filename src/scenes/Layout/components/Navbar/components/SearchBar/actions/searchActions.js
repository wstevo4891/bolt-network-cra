// Movies Index Actions

// Constants
// ========================================================
const FETCH_SEARCH_RESULTS_BEGIN = 'FETCH_SEARCH_RESULTS_BEGIN'

const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS'

const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILURE'

const URI = 'http://localhost:3001/api/v1'


// Dispatch Functions
// ========================================================
const fetchSearchResultsBegin = () => ({
  type: FETCH_SEARCH_RESULTS_BEGIN
})

const fetchSearchResultsSuccess = searchResults => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: { searchResults }
})

const fetchSearchResultsFailure = error => ({
  type: FETCH_SEARCH_RESULTS_FAILURE,
  payload: { error }
})


// Export Function
// ========================================================
export function fetchSearchResults(query) {
  return async dispatch => {
    try {
      if (query === '') return

      dispatch(fetchSearchResultsBegin())

      const response = await fetch(`${URI}/search/${query}`)

      const data = await response.json()

      dispatch(fetchSearchResultsSuccess(data))

      return data
    
    } catch(error) {
      dispatch(fetchSearchResultsFailure(error))
    }
  }
}
