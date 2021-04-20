export function buildGenreLinks(genres) {
  return genres.map((genre) => ({
    text: genre.title,
    url: genre.url,
  }))
}
