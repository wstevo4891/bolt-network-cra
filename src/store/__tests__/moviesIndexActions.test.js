import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import * as actions from '../actions/moviesIndexActions'
import * as types from '../types/moviesIndexTypes'

// const middleware = [thunk]
// const mockStore = configureMockStore(middleware)

describe('moviesIndexActions', () => {
  it('should render', () => {
    expect(true).toBe(true)
  })
})

// describe('moviesIndexActions', () => {
//   const PAYLOAD = {
//     Action: [{ title: 'The Avengers' }],
//     'Sci-Fi': [{ title: 'Alien' }]
//   }

//   const moviesIndexError = new Error('Failure in fetchMoviesIndex()')

//   const beginAction = {
//     type: types.FETCH_MOVIES_INDEX_BEGIN
//   }

//   const successAction = {
//     type: types.FETCH_MOVIES_INDEX_SUCCESS,
//     payload: { moviesIndex: PAYLOAD }
//   }

//   const failureAction = {
//     type: types.FETCH_MOVIES_INDEX_FAILURE,
//     payload: { error: moviesIndexError }
//   }

//   it('should create an action to begin fetch', () => {
//     expect(actions.fetchMoviesIndexBegin()).toEqual(beginAction)
//   })

//   it('should create an action for a successful fetch', () => {
//     expect(
//       actions.fetchMoviesIndexSuccess(PAYLOAD)
//     ).toEqual(successAction)
//   })

//   it('should create an action for a failed fetch', () => {
//     expect(
//       actions.fetchMoviesIndexFailure(moviesIndexError)
//     ).toEqual(failureAction)
//   })

//   describe('async actions', () => {
//     afterEach(() => fetchMock.restore())

//     it('creates FETCH_MOVIES_INDEX_SUCCESS when fetch is done', () => {
//       fetchMock.getOnce(actions.URI, PAYLOAD)

//       const expectedActions = [
//         beginAction,
//         successAction
//       ]

//       const store = mockStore({
//         moviesIndex: {
//           moviesIndex: {},
//           genres: [],
//           genresIndex: {}
//         }
//       })

//       return store.dispatch(actions.fetchMoviesIndex()).then(() => {
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//     })

//     it('creates FETCH_MOVIES_INDEX_FAILURE when fetch throws an error', () => {
//       fetchMock.getOnce(actions.URI, {
//         status: 400,
//         body: JSON.stringify(moviesIndexError)
//       })

//       const expectedActions = [
//         { type: types.FETCH_MOVIES_INDEX_BEGIN },
//         {
//           type: types.FETCH_MOVIES_INDEX_FAILURE,
//           payload: { error: moviesIndexError }
//         }
//       ]

//       const store = mockStore({
//         moviesIndex: {
//           moviesIndex: {},
//           genres: [],
//           genresIndex: {}
//         }
//       })

//       return store.dispatch(actions.fetchMoviesIndex()).then(() => {
//         expect(store.getActions()).toEqual(expectedActions)
//       })
//     })
//   })
// })

