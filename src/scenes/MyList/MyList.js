import React from 'react'

import { DisplayContainer, TitleRow } from 'components'

import { MoviesList } from './components'

import { fetchMyListMovies } from './utils'

export default function MyList() {
  const movies = fetchMyListMovies()

  return(
    <DisplayContainer>
      <TitleRow title="My List" />
      <MoviesList movies={movies} />
    </DisplayContainer>
  )
}
