import PropTypes from 'prop-types'
import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import API from 'store/api'

import {
  Footer,
  MainContainer,
  Navbar,
  Routes
} from './components'

import './App.styles.scss'

export const mapStateToProps = (state) => {
  const { genres } = state

  if (genres === undefined) {
    return { genres: [] }
  } else {
    return { genres: genres.list }
  }
}

const App = ({ genres }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(API.genres.fetch())
  }, [dispatch])

  if (genres.length === 0) return null

  return(
    <Router>
      <Navbar />
      <MainContainer>
        <Routes />
      </MainContainer>
      <Footer />
    </Router>
  )
}

App.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(App)
