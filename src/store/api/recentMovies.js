// Actions
import {
  fetchRecentMoviesBegin,
  fetchRecentMoviesSuccess,
  fetchRecentMoviesFailure
} from '../actions'

const URI = 'http://localhost:3001/api/v1/recent-movies'

function fetchRecentMovies() {
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

export default {
  fetch: fetchRecentMovies
}
