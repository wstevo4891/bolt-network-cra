import { API } from 'store'

export const mapDispatchToProps = (dispatch) => ({
  resetSuggestions: () => dispatch(API.suggestions.reset()),
  fetchSearchResults: (query) => dispatch(API.search.fetchResults(query)),
})
