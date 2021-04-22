import React from 'react'
import PropTypes from 'prop-types'

import { SLIDER } from 'utils'

// Services
import { translateFactory } from './utils'

// Components
import { PosterList } from 'components'

const SlidesContainer = (props) => {
  const { name, next, prev, slideLength, slides, start } = props

  const contentClass = (next || prev) ? 'sliderContent animating' : 'sliderContent'

  const transformStyle = translateFactory({ slideLength, start, next, prev })

  return(
    <div className="slider-container">
      <div className={contentClass} style={transformStyle}>
        <PosterList
          movies={slides}
          name={name}
          slideLength={slideLength}
          start={start}
          type={SLIDER}
        />
      </div>
    </div>
  )
}

SlidesContainer.propTypes = {
  name: PropTypes.string,
  next: PropTypes.bool,
  prev: PropTypes.bool,
  slideLength: PropTypes.number,
  slides: PropTypes.array,
  start: PropTypes.bool,
}

export default SlidesContainer
