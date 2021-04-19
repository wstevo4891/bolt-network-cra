export function buildMovieRows(movies, slideLength) {
  const rows = []
  if (movies === null || movies.length === 0) return rows

  let arr
  let i = 0

  while(i < movies.length) {
    arr = movies.slice(i, i += slideLength)
    rows.push(arr)
  }

  return rows
}
