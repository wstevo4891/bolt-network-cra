import PropTypes from 'prop-types'
import React from 'react'

import { Results } from 'components'

const SearchResults = (props) => {
  let results

  if (props.suggestionId) {
    results = props.suggestedMovies
  } else {
    results = props.searchMovies
  }

  if (results === null) return null

  return <Results movies={results} name="Search_Results" />
}

SearchResults.propTypes = {
  searchMovies: PropTypes.array,
  suggestedMovies: PropTypes.array,
  suggestion: PropTypes.string,
  suggestionId: PropTypes.string,
}

export default SearchResults

// searchMoviesList() {
//   const { suggestionId, suggestions, results: { movies } } = this.props

//   if (suggestionId && this.state.suggestion) {
//     return suggestions
//   }

//   return movies
// }
