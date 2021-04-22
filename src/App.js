import PropTypes from 'prop-types'
import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import API from 'store/api'

import {
  Footer,
  MainContainer,
  Navbar,
  Routes
} from './components'

import './App.styles.scss'

const mapStateToProps = (state) => {
  const { genres } = state

  if (genres === undefined) {
    return { genres: null }
  } else {
    return { genres }
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchGenres: () => dispatch(API.genres.fetch()),
// })

class App extends React.Component {
  render() {
    const { genres } = this.props

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

  componentDidMount() {
    this.props.dispatch(API.genres.fetch())
  }
}

// const App = ({ dispatch, genres }) => {
//   useEffect(() => {
//     fetchGenres()
//   })

//   if (genres === null) return null

//   return(
//     <Router>
//       <Navbar />
//       <MainContainer>
//         <Routes />
//       </MainContainer>
//       <Footer />
//     </Router>
//   )
// }

App.propTypes = {
  dispatch: PropTypes.func,
  // fetchGenres: PropTypes.func.isRequired,
  genres: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
}

export default connect(mapStateToProps)(App)
