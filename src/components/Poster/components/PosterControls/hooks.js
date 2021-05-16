import { useState } from 'react'

import { SessionListAPI } from 'services'

const LIKED_LIST = 'LikedList'

const UNLIKED_LIST = 'UnlikedList'

export function currentLikeState(movie) {
  if (SessionListAPI.findMovie(movie, LIKED_LIST)) return true

  if (SessionListAPI.findMovie(movie, UNLIKED_LIST)) return false

  return null
}

export function useLikeState(movie) {
  const initialState = currentLikeState(movie)

  const [likeState, setLikeState] = useState(initialState)

  const toggleLike = () => {
    const newState = likeState ? null : true
    setLikeState(newState)
  }

  const toggleUnlike = () => {
    const newState = (likeState === false) ? null : false
    setLikeState(newState)
  }

  return [likeState, toggleLike, toggleUnlike]
}
