import { API_URL } from '../constants'

import {
  fetchBannerMoviesBegin,
  fetchBannerMoviesSuccess,
  fetchBannerMoviesFailure
} from './actions'

function fetchBannerMovies(titles) {
  return async dispatch => {
    try {
      dispatch(fetchBannerMoviesBegin())
      const response = await fetch(`${API_URL}/movies/search-titles/${titles}`)
      const data = await response.json()
      dispatch(fetchBannerMoviesSuccess(data))
      return data
    } catch(error) {
      dispatch(fetchBannerMoviesFailure(error))
    }
  }
}

export default {
  fetch: fetchBannerMovies,
}
