export const mapStateToProps = (state) => {
  const { movies } = state

  if (movies === undefined) return { movies: [] }

  return { movies: movies.recent }
}
