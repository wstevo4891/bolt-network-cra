import React from 'react'
import PropTypes from 'prop-types'

import {
  PaginationList,
  SliderArrow,
  SlidesContainer,
} from './components'

import { PREV, NEXT } from './constants'

import './Slider.styles.scss'

const Slider = (props) => (
  <div id={`${props.genre}_slider`} className='genre-slider'>
    <PaginationList
      active={props.position - 1}
      listLength={props.listLength}
    />

    <SliderArrow
      start={props.start}
      direction={PREV}
      handleClick={props.handlePrevClick}
    />

    <SlidesContainer
      genre={props.genre}
      slides={props.slides}
      slideLength={props.slideLength}
      next={props.next}
      prev={props.prev}
      start={props.start}
    />

    <SliderArrow
      direction={NEXT}
      handleClick={props.handleNextClick}
    />
  </div>
)

Slider.propTypes = {
  genre: PropTypes.string,
  slideLength: PropTypes.number,
  slides: PropTypes.array,
  listLength: PropTypes.number,
  position: PropTypes.number,
  start: PropTypes.bool,
  next: PropTypes.bool,
  prev: PropTypes.bool,
  handlePrevClick: PropTypes.func,
  handleNextClick: PropTypes.func,
}

export default Slider
