import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import API from './services/API'

import './styles/App.scss'

import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import Routes from './components/Routes'
import Footer from './components/Footer'

class App extends Component {
  state = {
    genres: null
  }

  render() {
    const genres = this.state.genres

    if (genres === null) return null

    return (
      <Router>
        <MainContainer>
          {mcState => (
            <>
              <Navbar genres={genres} width={mcState.width} />

              <Routes genres={genres} slideLength={mcState.slideLength} />
            </>
          )}
        </MainContainer>

        <Footer />
      </Router>
    )
  }

  componentDidMount() {
    const genresData = sessionStorage.getItem('Genres')

    if (genresData) {
      this.setState({
        genres: JSON.parse(genresData)
      })
    } else {
      this.fetchGenres()
    }
  }

  fetchGenres() {
    const URI = 'http://localhost:3001/api/v1'

    // create a new XMLHttpRequest
    const xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      console.log('XHR Response')
      console.log(xhr.responseText)

      this.setState({
        genres: JSON.parse(xhr.responseText)
      })
    })

    xhr.open('GET', URI + '/genres')

    xhr.send()
  }

  // fetchGenres() {
  //   API.genresXHR.index()
  //     .then(response => {
  //       sessionStorage.setItem('Genres', JSON.stringify(response.data))

  //       this.setState({
  //         genres: response.data
  //       });
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  // }
}

export default App;
