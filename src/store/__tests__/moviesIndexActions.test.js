import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../actions/moviesIndexActions'
import * as types from '../types/moviesIndexTypes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('moviesIndexActions', () => {
  it('should create action to begin fetch', () => {
    const expectedAction = {
      type: types.FETCH_MOVIES_INDEX_BEGIN
    }

    expect(actions.fetchMoviesIndexBegin()).toEqual(expectedAction)
  })

  describe('async actions', () => {
    afterEach(() => fetchMock.restore())

    it('creates FETCH_MOVIES_INDEX_SUCCESS when fetch is done', () => {
      fetchMock.getOnce(actions.URI, {
        headers: { 'content-type': 'application/json' }
      })

      const PAYLOAD = {
        moviesIndex: {
          moviesIndex: {
            Action: [{ title: 'The Avengers' }],
            'Sci-Fi': [{ title: 'Alien' }]
          },
          genres: ['Action', 'Sci-Fi'],
          genresIndex: {
            action: { text: 'Action', url: '/genres/action' },
            'sci-fi': { text: 'Sci-Fi', url: '/genres/sci-fi' }
          }
        }
      }

      const expectedActions = [
        { type: types.FETCH_MOVIES_INDEX_BEGIN },
        {
          type: types.FETCH_MOVIES_INDEX_SUCCESS,
          payload: PAYLOAD
        }
      ]

      const store = mockStore({
        moviesIndex: {
          moviesIndex: {},
          genres: [],
          genresIndex: {}
        }
      })

      return store.dispatch(actions.fetchMoviesIndex()).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
    })
  })
})

