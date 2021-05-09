import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

export function useSuggestionManager() {
  const [suggestion, setSuggestion] = useState(null)

  const updateSuggestion = (event) => {
    const { text, dataset: { type } } = event.target

    setSuggestion({ text, type })
  }

  return [suggestion, updateSuggestion]
}

export function useUpdateSuggestionsEffect(suggestionId) {
  const dispatch = useDispatch()

  useEffect(() => {
    if (suggestionId) {
      dispatch(API.suggestions.fetch(suggestionId))
    }
  }, [dispatch, suggestionId])
}
