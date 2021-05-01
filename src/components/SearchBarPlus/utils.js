import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { API } from 'store'

export function useLocationUpdate(firstLocation) {
  const history = useHistory()

  return (query = null) => {
    if (query && query !== '') {
      history.push(`/search?q=${encodeURIComponent(query)}`)
    
    } else if (firstLocation === '/search') {
      history.push('/')
    
    } else {
      history.push(firstLocation)
    }
  }
}

export function clickHandler(resetFunc, updateFunc) {
  return (event) => {
    updateFunc(event.target.value)
    resetFunc()
  }
}

export function keyUpHandler(fetchFunc, resetFunc, setQuery, updateFunc) {
  return (event) => {
    const query = event.target.value

    setQuery(query, () => {
      updateFunc(query)
      fetchFunc(query)
      resetFunc()
    })
  }
}

export function useEventHandlers(setQuery, updateLocation) {
  const dispatch = useDispatch()

  const fetchSearchResults = (query) => dispatch(API.search.fetchResults(query))

  const resetSuggestions = () => dispatch(API.suggestions.reset())

  const handleClick = clickHandler(resetSuggestions, updateLocation)

  const handleKeyUp = keyUpHandler(fetchSearchResults, resetSuggestions, setQuery, updateLocation)

  return {
    handleClick,
    handleKeyUp,
  }
}
