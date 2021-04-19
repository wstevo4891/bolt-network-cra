import queryString from 'query-string'

export function parseParams(query) {
  const parsed = queryString.parse(query)

  return {
    query: decodeURIComponent(parsed.q),
    suggestionId: parsed.suggestionId,
  }
}
