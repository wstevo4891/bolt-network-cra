import PropTypes from 'prop-types'
import React from 'react'

import { Results } from 'components'

import { useResultsManager } from './hooks'

const SearchResults = ({ suggestion }) => {
  const results = useResultsManager(suggestion)

  if (results === null) return null

  return <Results movies={results} name="Search_Results" />
}

SearchResults.propTypes = {
  suggestion: PropTypes.object,
}

export default SearchResults
