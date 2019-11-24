// Movies Index Actions

// Constants
// ==================================================================
export const FETCH_MOVIES_INDEX_BEGIN = 'FETCH_MOVIES_INDEX_BEGIN'

export const FETCH_MOVIES_INDEX_SUCCESS = 'FETCH_MOVIES_INDEX_SUCCESS'

export const FETCH_MOVIES_INDEX_FAILURE = 'FETCH_MOVIES_INDEX_FAILURE'

const URI = 'http://localhost:3001/api/v1'


// Dispatch Functions
// ==================================================================
const fetchMoviesIndexBegin = () => ({
  type: FETCH_MOVIES_INDEX_BEGIN
})

const fetchMoviesIndexSuccess = moviesIndex => ({
  type: FETCH_MOVIES_INDEX_SUCCESS,
  payload: { moviesIndex }
})

const fetchMoviesIndexFailure = error => ({
  type: FETCH_MOVIES_INDEX_FAILURE,
  payload: { error }
})


// Export Function
// ==================================================================
export function fetchMoviesIndex() {
  return async dispatch => {
    try {
      dispatch(fetchMoviesIndexBegin())

      const response = await fetch(`${URI}/movies-index`)

      const data = await response.json()

      dispatch(fetchMoviesIndexSuccess(data))

      return data
    
    } catch(error) {
      dispatch(fetchMoviesIndexFailure(error))
    }
  }
}
