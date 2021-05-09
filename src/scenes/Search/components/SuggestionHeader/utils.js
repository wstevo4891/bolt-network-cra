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
export function headerText({ text, type }) {
  if (type === 'genre') {
    return `Titles in: ${text}`

  } else if (type === 'person') {
    return `Results for ${text} and more fan favorites`

  } else if (type === 'movie') {
    return `Titles related to ${text}`
  }
}
