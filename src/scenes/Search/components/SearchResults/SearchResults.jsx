import PropTypes from 'prop-types'
import React from 'react'

import { Results } from 'components'

const SearchResults = (props) => {
  let results

  if (props.suggestion && props.suggestedMovies) {
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
