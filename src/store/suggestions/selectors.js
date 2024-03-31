function selectSuggestions(state) {
  const { suggestions } = state

  if (!suggestions) return null

  return suggestions.list
}

export default {
  selectSuggestions,
}
