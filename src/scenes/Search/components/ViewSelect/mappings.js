export function mapStateToProps(state) {
  const { genres, movies } = state.search

  return {
    genres,
    movies,
  }
}
