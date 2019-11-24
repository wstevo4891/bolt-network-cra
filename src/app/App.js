// App Component

import React, { Component } from 'react';
import { connect } from 'react-redux'

import './styles/App.scss'

import Layout from './components/Layout'

import { fetchMoviesIndex } from './actions/moviesIndexActions'

class App extends Component {
  render() {
    const { genres } = this.props

    if (genres.length === 0) return null

    return <Layout />
  }

  componentDidMount() {
    this.props.dispatch(fetchMoviesIndex())
  }
}

function mapStateToProps(state) {
  return {
    genres: state.moviesIndex.genres
  }
}

export default connect(mapStateToProps)(App)
