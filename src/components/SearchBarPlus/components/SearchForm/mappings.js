import { API } from 'store'

export const mapDispatchToProps = (dispatch) => ({
  fetchSearchResults: (query) => dispatch(API.search.fetchResults(query)),
  resetSuggestions: () => dispatch(API.suggestions.reset()),
})
