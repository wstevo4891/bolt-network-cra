import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import API from './services/API'

import './styles/App.scss'

import MainContainer from './components/MainContainer/index'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

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
    API.genres.index()
      .then(response => {
        sessionStorage.setItem('Genres', JSON.stringify(response.data));

        this.setState({
          genres: response.data
        });
      })
      .catch(error => {
        console.error(error);
      })
  }
}

export default App;
