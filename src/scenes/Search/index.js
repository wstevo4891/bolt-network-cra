// Search Scene

import React from 'react'
import queryString from 'query-string'

// Styles
import './styles/index.scss'

// Components
import SearchResults from './components/SearchResults'

const Search = (props) => {
  if (props.searchResults === null) return null

  const parseQuery = () => {
    const q = queryString.parse(props.location.search).q
    return decodeURIComponent(q)
  }

  const query = parseQuery()

  const { genres, movies } = props.searchResults

  return(
    <SearchResults
      genres={genres}
      movies={movies}
      query={query}
      slideLength={props.slideLength}
    />
  )
}

export default Search
