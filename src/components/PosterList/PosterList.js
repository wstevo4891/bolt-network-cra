import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Utils
import { SLIDER, STATIC } from 'utils'

import { useMouseEventHandlers } from './hooks'

// Services
import { PosterDataFactory } from 'services'

// Components
import Poster from '../Poster'

const PosterList = (props) => {
  const { movies, name } = props

  const [hoverItem, setHoverItem] = useState(null)

  const mountedRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  const [handleMouseLeave, handleMouseOver] = useMouseEventHandlers(mountedRef, setHoverItem)

  if (movies === null) return null

  const factory = new PosterDataFactory({ ...props, hoverItem })

  return movies.map((movie, index) => {
    const posterData = factory.build(movie, index)

    return(
      <Poster
        key={`${name}_Poster_${movie.id}`}
        hoverItem={hoverItem}
        handleMouseLeave={handleMouseLeave}
        handleMouseOver={handleMouseOver}
        posterData={posterData}
      />
    )
  })
}

PosterList.propTypes = {
  movies: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  slideLength: PropTypes.number.isRequired,
  start: PropTypes.bool,
  type: PropTypes.oneOf([SLIDER, STATIC]).isRequired,
}

PosterList.defaultProps = {
  start: null,
}

export default PosterList
