export const mapStateToProps = (state) => {
  const { bannerMovies } = state

  if (bannerMovies === undefined) return { movies: [] }

  return {
    movies: bannerMovies.value
  }
}
