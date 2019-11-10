// app/javascript/main/scenes/Recent/components/MyList.jsx

import React, { Component } from 'react'

import ListEmpty from './components/ListEmpty'
import Results from '../../components/Results'

export default class MyList extends Component {
  state = {
    slideLength: this.props.slideLength,
    movies: null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.slideLength === this.state.slideLength) return

    this.setState({
      slideLength: nextProps.slideLength
    })
  }

  render() {
    const { slideLength, movies } = this.state

    if (movies === null) return null

    return(
      <div className="display-container">
        <div className="row">
          <div className="col-12 mb-4">
            <h1 style={{ color: 'white' }}>My List</h1>
          </div>
        </div>

        {this.renderList(movies, slideLength)}
      </div>
    )
  }

  componentDidMount() {
    const movies = this.state.movies

    if (movies !== null) return

    this.fetchMyList()
  }

  renderList = (movies, slideLength) => {
    if (movies.length === 0) {
      return <ListEmpty />
    } else {
      return <Results movies={movies} slideLength={slideLength} />
    }
  }

  fetchMyList = () => {
    let list = JSON.parse(sessionStorage.getItem('MyList'))

    if (list === null) {
      list = []
    }

    this.setState({
      movies: list
    })
  }
}
