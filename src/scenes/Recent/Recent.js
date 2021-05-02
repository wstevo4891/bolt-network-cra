import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

export default function Recent() {
  const movies = useSelector(API.movies.selectRecentMovies)
  const dispatch = useDispatch()

  useEffect(() => {
    if (movies === null) {
      dispatch(API.movies.fetchRecent())
    }
  }, [dispatch, movies])

  if (movies === null) return null

  return (
    <DisplayContainer>
      <TitleRow title="Recently Added" />
      <Results name="Recent" movies={movies} />
    </DisplayContainer>
  )
}
