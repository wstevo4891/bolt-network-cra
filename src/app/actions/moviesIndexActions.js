// Movies Index Actions

import API from '../services/API'

export const FETCH_MOVIES_INDEX_BEGIN = 'FETCH_MOVIES_INDEX_BEGIN'

export const FETCH_MOVIES_INDEX_SUCCESS = 'FETCH_MOVIES_INDEX_SUCCESS'

export const FETCH_MOVIES_INDEX_FAILURE = 'FETCH_MOVIES_INDEX_FAILURE'

export const fetchMoviesIndexBegin = () => ({
  type: FETCH_MOVIES_INDEX_BEGIN
})

export const fetchMoviesIndexSuccess = moviesIndex => ({
  type: FETCH_MOVIES_INDEX_SUCCESS,
  payload: { moviesIndex }
})

export const fetchMoviesIndexFailure = error => ({
  type: FETCH_MOVIES_INDEX_FAILURE,
  payload: { error }
})

export function fetchMoviesIndex() {
  return async dispatch => {
    try {
      dispatch(fetchMoviesIndexBegin())

      const response = await API.moviesIndex.fetch()

      const data = await response.json()

      dispatch(fetchMoviesIndexSuccess(data))
    
    } catch(error) {
      dispatch(fetchMoviesIndexFailure(error))
    }

    // return fetch("/products")
    //   .then(res => res.json())
    //   .then(json => {
    //     dispatch(fetchMoviesIndexSuccess(json.products))
    //     return json.products;
    //   })
    //   .catch(error => dispatch(fetchMoviesIndexFailure(error)))
  }
}
