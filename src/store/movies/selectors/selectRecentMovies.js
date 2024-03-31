export default function selectRecentMovies(state) {
  const { movies } = state

  if (movies === undefined) return null

  if (movies.recent.length === 0) return null

  return movies.recent
}
