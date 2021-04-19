import queryString from 'query-string'

import { API } from 'store'

function parseParams(query) {
  const parsed = queryString.parse(query)

  return {
    query: decodeURIComponent(parsed.q),
    suggestionId: parsed.suggestionId,
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(API.search.fetchResults(query)),
  fetchSuggestions: (suggestionId) => dispatch(API.suggestions.fetch(suggestionId)),
})

export function mapStateToProps(state, ownProps) {
  const { genres, movies, people } = state.search

  const suggestions = state.suggestions.movies

  const { query, suggestionId } = parseParams(ownProps.location.search)

  return {
    genres,
    movies,
    people,
    suggestionId,
    suggestions,
    query,
  }
}

// return {
//   genres: state.moviesIndex.genres,
//   genresIndex: state.moviesIndex.genresIndex,
//   moviesIndex: state.moviesIndex.moviesIndex,
//   search: state.search,
//   suggestions: state.suggestions
// }

{/* <Route
  path="/search"
  render={(routeProps) => {
    const { genres, movies, people } = props.search

    return (
      <Search
        genres={genres}
        movies={movies}
        people={people}
        query={routeProps.location.search}
        slideLength={props.slideLength}
        suggestions={props.suggestions}
      />
    )
  }}
/> */}

