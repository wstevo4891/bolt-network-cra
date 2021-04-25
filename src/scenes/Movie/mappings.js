export const mapStateToProps = (state, ownProps) => {
  const movieId = Number(ownProps.match.params.id)
  const { movies } = state

  if (movies === undefined) return { movie: null, movieId }

  const movie = movies.index[movieId]

  if (movie === undefined) return { movie: null, movieId }

  return { movie, movieId }
}
