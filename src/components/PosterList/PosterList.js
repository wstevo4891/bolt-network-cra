import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SLIDER, STATIC } from 'utils'

// Services
import { PosterDataFactory } from 'services'

// Components
import Poster from '../Poster'

class PosterList extends Component {
  state = {
    hoverItem: null
  }

  _mounted = false

  render() {
    const factory = new PosterDataFactory({...this.state, ...this.props })

    return this.props.movies.map((movie, index) => {
      const posterData = factory.build(movie, index)

      return(
        <Poster
          key={`${this.props.name}_Poster_${movie.id}`}
          mouseLeave={this.handleMouseLeave}
          mouseOver={this.handleMouseOver}
          posterData={posterData}
        />
      )
    })
  }

  handleMouseOver = (event) => {
    let mouseOut = false
    const target = event.target.closest('.poster-container')

    target.onmouseout = () => { mouseOut = true }

    setTimeout(() => {
      if (mouseOut) return

      const slideIndex = parseInt(target.classList[1].slice(-1), 10)

      this._mounted && this.setState({ hoverItem: slideIndex })
    }, 500)
  }

  handleMouseLeave = () => {
    this._mounted && this.setState({ hoverItem: null })
  }

  componentDidMount() {
    this._mounted = true
  }

  componentWillUnmount() {
    this._mounted = false
  }
}

PosterList.propTypes = {
  movies: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  slideLength: PropTypes.number.isRequired,
  start: PropTypes.bool,
  type: PropTypes.oneOf([SLIDER, STATIC]).isRequired,
}

PosterList.defaultProps = {
  start: null,
}

export default PosterList
