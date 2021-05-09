import queryString from 'query-string'

export function parseParams(query) {
  const parsed = queryString.parse(query)

  return {
    query: decodeURIComponent(parsed.q),
    suggestionId: parsed.suggestionId,
  }
}

export function parseQuery(search) {
  return decodeURIComponent(queryString.parse(search).q)
}

export function parseSuggestionId(search) {
  return queryString.parse(search).suggestionId
}
