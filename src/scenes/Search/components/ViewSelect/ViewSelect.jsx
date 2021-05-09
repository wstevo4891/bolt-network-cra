import React from 'react'
import { useSelector } from 'react-redux'

import { API } from 'store'

// Components
import { DesktopView, MobileView, NotFound } from '..'

const ViewSelect = (props) => {
  const { genres, movies } = useSelector(API.search.selectResults)

  if (genres.length === 0 && movies.length === 0) {
    return <NotFound query={props.query} />
  }

  if (window.innerWidth < 768) {
    return <MobileView {...props} />

  } else {
    return <DesktopView {...props} />
  }
}

export default ViewSelect
