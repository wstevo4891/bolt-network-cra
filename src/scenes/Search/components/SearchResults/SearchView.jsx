import React from 'react'

// Components
import NotFound from '../NotFound'
import MobileView from '../MobileView'
import DesktopView from '../DesktopView'

const SearchView = (props) => {
  const { resultsProps, suggestionsProps } = props
  const { results: { genres, movies }, query } = suggestionsProps

  if (genres.length === 0 && movies.length === 0) {
    return <NotFound query={query} />

  } else if (window.innerWidth < 768) {
    return <MobileView resultsProps={resultsProps} suggestionsProps={suggestionsProps} />

  } else {
    return <DesktopView {...props} />
  }
}

export default SearchView
