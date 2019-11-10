// Home Page Stateful Component

import React, { Component } from 'react'

import API from './services/API'

import './styles/HomePage.scss'

import HomePage from './components/HomePage'

export default class Home extends Component {
  state = {
    slideLength: this.props.slideLength,
    moviesIndex: null
  }

  componentWillReceiveProps(nextProps) {
    let slideLength = this.state.slideLength

    if (nextProps.slideLength === slideLength) return

    slideLength = nextProps.slideLength

    let moviesIndex = sessionStorage.getItem(`MoviesIndex_${slideLength}`)

    if (moviesIndex === null) {
      this.fetchMoviesIndex(slideLength)

    } else {
      this.setState({
        slideLength: slideLength,
        moviesIndex: JSON.parse(moviesIndex)
      })
    }
  }

  render() {
    const { slideLength, moviesIndex } = this.state

    if (moviesIndex === null) return null

    return(
      <HomePage
        genres={this.props.genres}
        slideLength={slideLength}
        moviesIndex={moviesIndex}
      />
    )
  }

  componentDidMount() {
    let { slideLength, moviesIndex } = this.state

    if (moviesIndex !== null) return

    moviesIndex = sessionStorage.getItem(`MoviesIndex_${slideLength}`)

    if (moviesIndex === null) {
      this.fetchMoviesIndex(slideLength)

    } else {
      this.setState({
        moviesIndex: JSON.parse(moviesIndex)
      })
    }
  }

  fetchMoviesIndex = (slideLength) => {
    API.moviesIndex.get(slideLength)
      .then(response => {
        sessionStorage.setItem(
          `MoviesIndex_${slideLength}`,
          JSON.stringify(response.data)
        )

        this.setState({
          slideLength: slideLength,
          moviesIndex: response.data
        })
      })
      .catch(err => {
        console.error('Error in Home.fetchMoviesIndex()')
        console.error(err)
      })
  }
}
