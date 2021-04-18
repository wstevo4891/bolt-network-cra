import PropTypes from 'prop-types'
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import API from 'store/api'

import {
  Footer,
  MainContainer,
  Navbar,
  Routes
} from './components'

import './styles/base'

const mapStateToProps = (state) => ({
  genres: state.genres.list
})

const mapDispatchToProps = (dispatch) => ({
  fetchGenres: dispatch(API.genres.fetch())
})

const App = ({ fetchGenres, genres }) => {
  useEffect(() => {
    fetchGenres()
  }, [fetchGenres, genres])

  if (genres === null) return null

  return(
    <Router>
      <Route component={Navbar} />
      <MainContainer>
        <Routes />
      </MainContainer>
      <Footer />
    </Router>
  )
}

App.propTypes = {
  fetchGenres: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired
}

export default connect(mapDispatchToProps, mapStateToProps)(App)
