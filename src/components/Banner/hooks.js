import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

import { MOVIE_TITLES } from './constants'

import { randomIndex } from './utils'

export function useBannerMoviesAPI() {
  const movies = useSelector(API.bannerMovies.select)

  const dispatch = useDispatch()

  useEffect(() => {
    if (movies === null) {
      dispatch(API.bannerMovies.fetch(MOVIE_TITLES))
    }
  })

  return movies
}

export function useRandomBannerMovie() {
  const movies = useBannerMoviesAPI()

  if (movies === null) return null

  const index = randomIndex(MOVIE_TITLES.length)

  return movies[index]
}
