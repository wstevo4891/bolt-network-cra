import { API } from 'store'

import { parseParams } from './utils'

export const mapDispatchToProps = (dispatch) => ({
  fetchSuggestions: (suggestionId) => dispatch(API.suggestions.fetch(suggestionId)),
})

export function mapStateToProps(_state, ownProps) {
  const { query, suggestionId } = parseParams(ownProps.location.search)

  return {
    suggestionId,
    query,
  }
}
