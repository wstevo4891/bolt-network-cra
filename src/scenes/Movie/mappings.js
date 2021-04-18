import API from 'store'

export const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (movieId) => dispatch(API.movies.fetch(movieId))
})

export const mapStateToProps = (state, ownProps) => {
  const movieId = ownProps.match.params.id
  const movie = state.movies.index[movieId]

  return { movie, movieId }
}
