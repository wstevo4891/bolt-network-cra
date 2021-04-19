import PropTypes from 'prop-types'
import React from 'react'

import { Results } from 'components'

const SearchResults = (props) => {
  let results

  if (props.suggestionId && props.suggestion) {
    results = props.suggestedMovies
  } else {
    results = props.searchMovies
  }

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
