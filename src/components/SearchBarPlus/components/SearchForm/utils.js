import { useHistory } from 'react-router-dom'

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

export function useEventHandlers(props, setQuery, updateLocation) {
  const handleClick = (event) => {
    const query = event.target.value

    updateLocation(query)
    props.resetSuggestions()
  }

  const handleKeyUp = (event) => {
    const query = event.target.value

    setQuery(query, () => {
      updateLocation(query)
      props.fetchSearchResults(query)
      props.resetSuggestions()
    })
  }

  return {
    handleClick,
    handleKeyUp,
  }
}
