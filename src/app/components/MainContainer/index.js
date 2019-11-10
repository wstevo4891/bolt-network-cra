import React, { Component } from 'react';

import './styles.scss'

export default class MainContainer extends Component {
  state = {
    width: null,
    slideLength: null
  }

  slideLengthIndex = {
    1400: 6,
    1100: 5,
    800: 4,
    500: 3
  }

  breakpoints = [1400, 1100, 800, 500]

  render() {
    if (this.state.slideLength === null) return null

    return (
      <div id="main-container">
        {this.props.children(this.state)}
      </div>
    )
  }

  componentDidMount() {
    if (this.state.slideLength === null) {
      this.updateSlideLength()
    }

    window.addEventListener("resize", this.updateSlideLength.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSlideLength.bind(this))
  }

  updateSlideLength = () => {
    const width = window.innerWidth
    let num = null

    for (let point of this.breakpoints) {
      if (width >= point) {
        num = this.slideLengthIndex[point]
        break
      }
    }

    if (num == null) num = 2

    this.setState({
      width: width,
      slideLength: num
    })
  }
}
