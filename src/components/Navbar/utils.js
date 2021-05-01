export function buildGenreLinks(genres) {
  return genres.map(({ title, url }) => ({ url, text: title }))
}

export function selectGenresList(state) {
  const { genres } = state

  if (genres === undefined) return null

  return genres.list
}
