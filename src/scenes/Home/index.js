// Home Page Stateful Component

import React, { Component } from 'react'

import API from './services/API'

import './styles/HomePage.scss'

import HomePage from './components/HomePage'

export default class Home extends Component {
  state = {
    moviesIndex: null
  }

  render() {
    const moviesIndex = this.state.moviesIndex

    if (moviesIndex === null) return null

    return(
      <HomePage
        genres={this.props.genres}
        slideLength={this.props.slideLength}
        moviesIndex={moviesIndex}
      />
    )
  }

  componentDidMount() {
    const slideLength = this.props.slideLength

    const moviesIndex = sessionStorage.getItem(`MoviesIndex_${slideLength}`)

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
