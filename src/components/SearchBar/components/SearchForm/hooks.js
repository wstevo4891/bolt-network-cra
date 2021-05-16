import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API } from 'store'

export function useLocationUpdater(pathname) {
  const history = useHistory()

  return (query = null) => {
    if (query && query !== '') {
      history.push(`/search?q=${encodeURIComponent(query)}`)
    
    } else if (pathname === '/search') {
      history.push('/')
    
    } else {
      history.push(pathname)
    }
  }
}

export function useAPI() {
  const dispatch = useDispatch()

  const fetchSearchResults = (query) => dispatch(API.search.fetchResults(query))

  const resetSuggestions = () => dispatch(API.suggestions.reset())

  return [
    fetchSearchResults,
    resetSuggestions,
  ]
}

export function useAPIHandlers(updateLocation) {
  const [fetchSearchResults, resetSuggestions] = useAPI()

  const handleClick = (event) => {
    updateLocation(event.target.value)
    resetSuggestions()
  }

  const handleKeyUp = (event) => {
    const query = event.target.value
    updateLocation(query)
    fetchSearchResults(query)
    resetSuggestions()
  }

  return [handleClick, handleKeyUp]
}

export function useEventHandlers(pathname, setQuery) {
  const updateLocation = useLocationUpdater(pathname)

  const [handleClick, handleKeyUp] = useAPIHandlers(updateLocation)

  const handleChange = (event) => setQuery(event.target.value)

  const clearSearch = () => {
    setQuery('')
    updateLocation()
  }

  return [
    clearSearch,
    handleChange,
    handleClick,
    handleKeyUp,
  ]
}
