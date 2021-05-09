import PropTypes from 'prop-types'
import React from 'react'

import { SearchContainer, ViewSelect } from './components'

import { parseParams } from './utils'

import { useSuggestionManager, useUpdateSuggestionsEffect } from './hooks'

const Search = ({ location }) => {
  const { query, suggestionId } = parseParams(location.search)

  const [suggestion, updateSuggestion] = useSuggestionManager()

  useUpdateSuggestionsEffect(suggestionId)

  return (
    <SearchContainer>
      <ViewSelect
        handleClick={updateSuggestion}
        suggestion={suggestion}
        query={query}
      />
    </SearchContainer>
  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Search
