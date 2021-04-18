import {
  fetchBannerMoviesBegin,
  fetchBannerMoviesSuccess,
  fetchBannerMoviesFailure
} from './actions'

import { API_URL } from './constants'

function fetchResponse(titles) {
  return fetch(`${API_URL}/movies/search-titles`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ titles })
  })
}

function fetchBannerMovies(titles) {
  return async dispatch => {
    try {
      dispatch(fetchBannerMoviesBegin())
      const response = await fetchResponse(titles)
      const data = await response.json()
      dispatch(fetchBannerMoviesSuccess(data))
      return data
    } catch(error) {
      dispatch(fetchBannerMoviesFailure(error))
    }
  }
}

export default {
  fetch: fetchBannerMovies
}
