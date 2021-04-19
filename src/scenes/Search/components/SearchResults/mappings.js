export function mapStateToProps(state) {
  const { movies } = state.search

  return {
    searchMovies: movies,
    suggestedMovies: state.suggestions.list,
  }
}
