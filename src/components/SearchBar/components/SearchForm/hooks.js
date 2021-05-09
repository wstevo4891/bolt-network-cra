import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API } from 'store'

export function useLocationUpdate(pathname) {
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

export function clickHandler(resetFunc, updateFunc) {
  return (event) => {
    updateFunc(event.target.value)
    resetFunc()
  }
}

export function keyUpHandler(fetchFunc, resetFunc, updateFunc) {
  return (event) => {
    const query = event.target.value
    updateFunc(query)
    fetchFunc(query)
    resetFunc()
  }
}

export function useEventHandlers(pathname) {
  const updateLocation = useLocationUpdate(pathname)

  const [fetchSearchResults, resetSuggestions] = useAPI()

  const handleClick = clickHandler(resetSuggestions, updateLocation)

  const handleKeyUp = keyUpHandler(fetchSearchResults, resetSuggestions, updateLocation)

  return [
    handleClick,
    handleKeyUp,
    updateLocation,
  ]
}
