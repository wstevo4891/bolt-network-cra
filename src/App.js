import PropTypes from 'prop-types'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { API } from 'store'

import {
  Footer,
  MainContainer,
  Navbar,
  Routes
} from './components'

import './App.styles.scss'

const App = () => {
  const genres = useSelector(API.genres.selectList)

  const dispatch = useDispatch()

  useEffect(() => {
    if (genres === null) {
      dispatch(API.genres.fetch())
    }
  })

  if (genres === null) return null

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

export default App
