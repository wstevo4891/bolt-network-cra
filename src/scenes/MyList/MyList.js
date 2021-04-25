import React from 'react'

import { DisplayContainer, TitleRow } from 'components'
import MoviesList from './MoviesList'

import { fetchMyListMovies } from './utils'

export default function MyList() {
  const movies = fetchMyListMovies()

  console.log('MyList.movies', movies)

  return(
    <DisplayContainer>
      <TitleRow title="My List" />
      <MoviesList movies={movies} />
    </DisplayContainer>
  )
}
