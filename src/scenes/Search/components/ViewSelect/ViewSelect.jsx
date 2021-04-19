import React from 'react'

// Components
import NotFound from '../NotFound'
import MobileView from '../MobileView'
import DesktopView from '../DesktopView'

const ViewSelect = (props) => {
  const { genres, handleClick, movies, suggestionProps, query } = props

  if (genres.length === 0 && movies.length === 0) {
    return <NotFound query={query} />
  }

  const viewProps = { handleClick, suggestionProps, query }

  if (window.innerWidth < 768) {
    return <MobileView {...viewProps} />

  } else {
    return <DesktopView {...viewProps} />
  }
}

export default ViewSelect
