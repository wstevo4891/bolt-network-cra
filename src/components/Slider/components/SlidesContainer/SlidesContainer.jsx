import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import { API } from 'store'

import { SLIDER } from 'utils'

// Components
import { PosterList } from 'components'

// Local Services
import { translateFactory } from './utils'

const SlidesContainer = ({ name, next, prev, slides, start }) => {
  const slideLength = useSelector(API.slideLength.get)

  const contentClass = (next || prev) ? 'sliderContent animating' : 'sliderContent'

  const transformStyle = translateFactory({ slideLength, start, next, prev })

  return(
    <div className={contentClass} style={transformStyle}>
      <PosterList
        movies={slides}
        name={name}
        slideLength={slideLength}
        start={start}
        type={SLIDER}
      />
    </div>
  )
}

SlidesContainer.propTypes = {
  name: PropTypes.string,
  next: PropTypes.bool,
  prev: PropTypes.bool,
  slides: PropTypes.array,
  start: PropTypes.bool,
}

export default SlidesContainer
