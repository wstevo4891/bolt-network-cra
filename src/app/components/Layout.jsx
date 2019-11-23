// Layout Component

import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import MainContainer from './MainContainer'
import Navbar from './Navbar'
import Routes from './Routes'
import Footer from './Footer'

function Layout(props) {
  return(
    <Router>
      <MainContainer>
        {slideLength => (
          <>
            <Navbar
              genresIndex={props.genresIndex}
              fetchResults={props.fetchSearchResults}
            />

            <Routes
              genres={props.genres}
              genresIndex={props.genresIndex}
              moviesIndex={props.moviesIndex}
              slideLength={slideLength}
              searchResults={props.searchResults}
            />
          </>
        )}
      </MainContainer>

      <Footer />
    </Router>
  )
}

export default Layout
