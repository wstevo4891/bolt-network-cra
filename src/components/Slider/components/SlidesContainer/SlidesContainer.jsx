import React from 'react'
import PropTypes from 'prop-types'

import { SLIDER } from 'utils'

// Components
import { PosterList } from 'components'

// Local Services
import { translateFactory } from './utils'

const SlidesContainer = (props) => {
  const { name, next, prev, slideLength, slides, start } = props

  const contentClass = (next || prev) ? 'sliderContent animating' : 'sliderContent'

  const transformStyle = translateFactory({ slideLength, start, next, prev })

  return(
    <div className={contentClass} style={transformStyle}>
      <PosterList
        movies={slides}
        name={name}
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
  slideLength: PropTypes.number,
  slides: PropTypes.array,
  start: PropTypes.bool,
}

export default SlidesContainer
