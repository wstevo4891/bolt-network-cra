export function setSearchValue(movies) {
  return (movies && movies.length > 0) ? movies : null
}

export function mapStateToProps(state) {
  const { search, suggestions } = state

  const searchMovies = setSearchValue(search.movies)

  const suggestedMovies = setSearchValue(suggestions.list)

  return {
    searchMovies,
    suggestedMovies,
  }
}
