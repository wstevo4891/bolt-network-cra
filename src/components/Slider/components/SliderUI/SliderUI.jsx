import React from 'react'
import PropTypes from 'prop-types'

import {
  SliderArrow,
  SlidesContainer,
} from '..'

import { PREV, NEXT } from 'utils'

import './SliderUI.styles.scss'

const SliderUI = (props) => {
  const { handleArrowClick, name, next, prev, slides, start } = props

  return (
    <div className='slider'>
      <SliderArrow
        direction={PREV}
        handleClick={() => handleArrowClick(PREV)}
        start={start}
      />
  
      <SlidesContainer
        name={name}
        next={next}
        prev={prev}
        slides={slides}
        start={start}
      />
  
      <SliderArrow
        direction={NEXT}
        handleClick={() => handleArrowClick(NEXT)}
      />
    </div>
  )
}

SliderUI.propTypes = {
  handleArrowClick: PropTypes.func,
  name: PropTypes.string,
  next: PropTypes.bool,
  position: PropTypes.number,
  prev: PropTypes.bool,
  slides: PropTypes.array,
  start: PropTypes.bool,
}

export default SliderUI
