import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { noop } from 'utils'

import { SliderUI } from './components'

class Slider extends Component {
  state = {
    position: 1,
    start: true,
    next: false,
    prev: false
  }

  get nextPosition() {
    const { next, prev, position } = this.state

    if (next) {
      return position + 1
    } else if (prev) {
      return position - 1
    } else return position
  }

  set pointerEvents(value) {
    document.getElementById('root').style['pointer-events'] = value
  }

  render() {
    const { name, slides } = this.props

    return(
      <SliderUI
        {...this.state}
        handleArrowClick={this.handleArrowClick}
        name={name}
        slides={slides}
      />
    )
  }

  handleArrowClick = (direction) => {
    this.pointerEvents = 'none'

    this.setState({ [direction]: true }, this.updateSlider(direction))
  }

  updateSlider(direction) {
    this.props.fetchNextSlides(direction, () => {
      setTimeout(this.handleTransitionEnd(), 1000)
    })
  }

  handleTransitionEnd() {
    const newState = {
      position: this.nextPosition,
      start: false,
      next: false,
      prev: false
    }

    this.setState(newState, () => { this.pointerEvents = 'auto' })
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
