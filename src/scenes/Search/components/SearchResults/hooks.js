import { useSelector } from 'react-redux'

import { API } from 'store'

export function useResultsManager(currentSuggestion) {
  const { movies } = useSelector(API.search.selectResults)
  
  const suggestions = useSelector(API.suggestions.select)

  if (currentSuggestion && suggestions.length > 0) {
    return suggestions
  }

  return movies.length > 0 ? movies : null
}
