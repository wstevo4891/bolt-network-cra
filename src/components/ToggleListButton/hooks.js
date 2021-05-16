import { useState } from 'react'

import { SessionListAPI } from 'services'

export function useListState(movie, listName, updateContainer) {
  const initialState = SessionListAPI.findMovie(movie, listName)

  const [listState, setListState] = useState(initialState)

  const toggleList = () => {
    if (listState) {
      SessionListAPI.remove(movie, listName)
    } else {
      SessionListAPI.add(movie, listName)
    }

    setListState(!listState)
    updateContainer()
  }

  return [listState, toggleList]
}
