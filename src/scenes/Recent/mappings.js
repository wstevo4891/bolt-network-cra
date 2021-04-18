import { recentMovies as API } from 'store/api'

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(API.fetch())
})
