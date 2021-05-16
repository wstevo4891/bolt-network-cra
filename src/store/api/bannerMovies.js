import {
  fetchBannerMoviesBegin,
  fetchBannerMoviesSuccess,
  fetchBannerMoviesFailure
} from '../actions'

import { API_URL } from './constants'

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

function selectBannerMovies(state) {
  const { bannerMovies } = state

  if (bannerMovies === undefined) return { movies: null }

  return { movies: bannerMovies.value }
}

export default {
  select: selectBannerMovies,
  fetch: fetchBannerMovies
}
