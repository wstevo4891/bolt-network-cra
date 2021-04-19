export function mapStateToProps(state) {
  const { genres, movies, people } = state.search

  return {
    results: {
      genres,
      movies,
      people,
    },
  }
}
