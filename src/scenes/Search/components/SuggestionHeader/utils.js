/**
 * @function
 * 
 * @description Builds text for SuggestionHeader
 * 
 * @param {string} suggestionId
 * @param {string} suggestion
 * 
 * @returns {string}
 */
export function headerText(suggestionId, suggestion) {
  const type = suggestionId.split('_')[1]

  if (type === 'genre') {
    return `Titles in: ${suggestion}`

  } else if (type === 'person') {
    return `Results for ${suggestion} and more fan favorites`

  } else if (type === 'movie') {
    return `Titles related to ${suggestion}`
  }
}
