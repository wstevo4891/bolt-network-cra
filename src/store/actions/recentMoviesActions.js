// Recent Movies Actions

// Constants
// ==================================================================
export const FETCH_RECENT_MOVIES_BEGIN = 'FETCH_RECENT_MOVIES_BEGIN'

export const FETCH_RECENT_MOVIES_SUCCESS = 'FETCH_RECENT_MOVIES_SUCCESS'

export const FETCH_RECENT_MOVIES_FAILURE = 'FETCH_RECENT_MOVIES_FAILURE'

const URI = 'http://localhost:3001/api/v1/recent-movies'


// Dispatch Functions
// ==================================================================
const fetchRecentMoviesBegin = () => ({
  type: FETCH_RECENT_MOVIES_BEGIN
})

const fetchRecentMoviesSuccess = movies => ({
  type: FETCH_RECENT_MOVIES_SUCCESS,
  payload: { movies }
})

const fetchRecentMoviesFailure = error => ({
  type: FETCH_RECENT_MOVIES_FAILURE,
  payload: { error }
})


// Export Function
// ==================================================================
export function fetchRecentMovies() {
  return async dispatch => {
    try {
      dispatch(fetchRecentMoviesBegin())

      const response = await fetch(URI)

      const data = await response.json()

      dispatch(fetchRecentMoviesSuccess(data))

      return data

    } catch(error) {
      dispatch(fetchRecentMoviesFailure(error))
    }
  }
}
