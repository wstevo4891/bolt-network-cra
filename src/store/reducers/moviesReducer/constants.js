import {
  FETCH_MOVIE_BEGIN,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
  FETCH_RECENT_MOVIES_BEGIN,
  FETCH_RECENT_MOVIES_SUCCESS,
  FETCH_RECENT_MOVIES_FAILURE
} from '../../types'

export const TYPES = {
  INDEX: {
    FETCH_MOVIE_BEGIN,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIE_FAILURE
  },
  RECENT: {
    FETCH_RECENT_MOVIES_BEGIN,
    FETCH_RECENT_MOVIES_SUCCESS,
    FETCH_RECENT_MOVIES_FAILURE
  }
}

export const INITIAL_STATE = {
  error: null,
  index: {},
  loading: false,
  recent: []
}
