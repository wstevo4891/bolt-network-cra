// app/javascript/main/scenes/Recent/components/MyList.jsx

import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  DisplayContainer,
  Results,
  TitleRow,
} from 'components'

import ListEmpty from '.ListEmpty'

const MY_LIST = 'MyList'

export default class MyList extends Component {
  state = {
    movies: null
  }

  render() {
    if (this.state.movies === null) return null

    return(
      <DisplayContainer>
        <TitleRow title="My List" />
        {this.renderList()}
      </DisplayContainer>
    )
  }

  renderList() {
    const movies = this.state.movies
    if (movies.length === 0) return <ListEmpty />
    
    return (
      <Results
        movies={movies}
        name={MY_LIST}
        slideLength={this.props.slideLength}
      />
    )
  }

  componentDidMount() {
    this.fetchMyList()
  }

  fetchMyList = () => {
    const list = JSON.parse(sessionStorage.getItem(MY_LIST))

    const newMovies = list === null ? [] : Object.values(list)

    this.setState({
      movies: newMovies
    })
  }
}
