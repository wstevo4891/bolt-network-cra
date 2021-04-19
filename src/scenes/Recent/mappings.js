import { API } from 'store'

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(API.movies.fetchRecent())
})

export const mapStateToProps = (state) => ({
  movies: state.movies.recent
})
