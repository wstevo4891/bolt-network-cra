export function mapStateToProps(state) {
  const { genres, movies } = state.search

  console.log('genres', genres)

  console.log('movies', movies)

  return {
    genres,
    movies,
  }
}
