export function selectGenreFromIndex(slug) {
  return (state) => {
    const { genres: { index } } = state
    const genre = index[slug]

    if (genre === undefined) return null

    return genre
  }
}
