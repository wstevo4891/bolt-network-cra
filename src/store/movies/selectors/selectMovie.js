export default function selectMovie(movieId) {
  return (state) => {
    const { movies } = state

    if (movies === undefined) return null

    const movie = movies.index[movieId]

    if (movie === undefined) return null

    return movie
  }
}
