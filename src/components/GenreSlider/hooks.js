import { useEffect, useState } from 'react'

import { API } from 'store'

import { findNextPage } from './utils'

const INITIAL_STATE = {
  page: 0,
  movies: null,
}

export function genreMoviesFetcher(currentPage, genreID, setState, slideLength) {
  return (direction) => {
    const page = findNextPage(currentPage, direction, slideLength)

    return API.movies
              .fetchByGenre(genreID, page, slideLength)
              .then((movies) => setState({ page, movies }))
  }
}

export function useFetchMoviesEffect(genreID, page, setState, slideLength) {
  useEffect(() => {
    if (page !== 0) return

    API.movies
       .fetchByGenre(genreID, page, slideLength)
       .then((movies) => setState({ movies, page: 1 }))
  })
}

export function useGenreSliderState(genre, slideLength) {
  const [state, setState] = useState(INITIAL_STATE)

  const fetchMovies = genreMoviesFetcher(state.page, genre.id, setState, slideLength)

  useFetchMoviesEffect(genre.id, state.page, setState, slideLength)

  return [fetchMovies, state]
}
