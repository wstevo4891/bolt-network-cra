// Layout Component

import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Routes from './Routes'
import Footer from './Footer'

function Layout() {
  return(
    <Router>
      <MainContainer>
        {slideLength => (
          <>
            <Route render={(routeProps) =>
              <Navbar {...routeProps} />
            } />

            <Routes slideLength={slideLength} />
          </>
        )}
      </MainContainer>

      <Footer />
    </Router>
  )
}

export default Layout
