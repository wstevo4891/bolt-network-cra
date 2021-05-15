import React from 'react'
import PropTypes from 'prop-types'

import { PREV, NEXT, noop } from 'utils'

import { SliderArrow, SlidesContainer } from './components'

import { useSliderEffects, useSliderState } from './hooks'

import './Slider.styles.scss'

const Slider = ({ fetchSlides, name, slides }) => {
  const [handleArrowClick, sliderState] = useSliderState(fetchSlides)

  useSliderEffects(sliderState)

  return (
    <div className='slider'>
      <SliderArrow
        direction={PREV}
        handleClick={() => handleArrowClick(PREV)}
        start={sliderState.start}
      />
      <SlidesContainer
        {...sliderState}
        name={name}
        slides={slides}
      />
      <SliderArrow
        direction={NEXT}
        handleClick={() => handleArrowClick(NEXT)}
      />
    </div>
  )
}

Slider.propTypes = {
  fetchNextSlides: PropTypes.func,
  name: PropTypes.string.isRequired,
  slides: PropTypes.array.isRequired,
}

Slider.defaultProps = {
  fetchSlides: noop,
}

export default Slider
