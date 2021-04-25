import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { noop } from 'utils'

import { PREV, NEXT } from 'utils'

import { SliderArrow, SlidesContainer } from './components'

export const CLEAR_STATE = {
  start: false,
  next: false,
  prev: false,
}

class Slider extends Component {
  state = {
    start: true,
    next: false,
    prev: false
  }

  set pointerEvents(value) {
    document.getElementById('root').style['pointer-events'] = value
  }

  render() {
    const { next, prev, start } = this.state
    const { name, slides } = this.props

    return(
      <div className='slider'>
        <SliderArrow
          direction={PREV}
          handleClick={() => this.handleArrowClick(PREV)}
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
          handleClick={() => this.handleArrowClick(NEXT)}
        />
      </div>
    )
  }

  handleArrowClick = (direction) => {
    this.pointerEvents = 'none'

    this.setState({ [direction]: true }, () => {
      setTimeout(() => {
        this.props.fetchNextSlides(direction, () => this.handleTransitionEnd())
      }, 1000)
    })
  }

  handleTransitionEnd() {
    this.setState(CLEAR_STATE, () => { this.pointerEvents = 'auto' })
  }
}

Slider.propTypes = {
  fetchNextSlides: PropTypes.func,
  name: PropTypes.string.isRequired,
  slides: PropTypes.array.isRequired,
}

Slider.defaultProps = {
  fetchNextSlides: noop,
}

export default Slider
