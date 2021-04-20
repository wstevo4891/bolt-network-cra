import React from 'react'
import PropTypes from 'prop-types'

// Services
import TranslateCalculator from './TranslateCalculator'

// Components
import { PosterList, SliderContent } from 'components'

const SlidesContainer = (props) => {
  const { genre, slides, slideLength, start, next, prev } = props

  const transformStyle = new TranslateCalculator(
    slideLength, start, next, prev
  ).call()

  return(
    <div className="slider-container">
      <SliderContent
        next={next}
        prev={prev}
        style={transformStyle}
      >
        <PosterList
          movies={slides}
          name={genre}
          slideLength={slideLength}
          start={start}
          type="slider"
        />
      </SliderContent>
    </div>
  )
}

SlidesContainer.propTypes = {
  genre: PropTypes.string,
  slides: PropTypes.array,
  slideLength: PropTypes.number,
  start: PropTypes.bool,
  next: PropTypes.bool,
  prev: PropTypes.bool
}

export default SlidesContainer
