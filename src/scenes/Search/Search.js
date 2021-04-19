import PropTypes from 'prop-types'
import React, { Component } from 'react'

import SearchContainer from './components/SearchContainer'

import ViewSelect from './components/ViewSelect'

class Search extends Component {
  state = {
    suggestion: null
  }

  render() {
    const { suggestionId, query } = this.props

    const suggestionProps = {
      suggestionId,
      suggestion: this.state.suggestion,
    }

    return (
      <SearchContainer>
        <ViewSelect
          handleClick={this.handleClick}
          suggestionProps={suggestionProps}
          query={query}
        />
      </SearchContainer>
    )
  }

  handleClick = (event) => {
    this.setState({
      suggestion: event.target.text
    })
  }

  componentDidUpdate(prevProps) {
    const { query, fetchSuggestions, suggestionId } = this.props

    if (query === prevProps.data.query) return

    if (suggestionId) {
      fetchSuggestions(suggestionId)
    } else {
      this.setState({ suggestion: null })
    }
  }
}

Search.propTypes = {
  fetchSuggestions: PropTypes.func.isRequired,
  suggestionId: PropTypes.number,
  query: PropTypes.string,
}

Search.defaultProps = {
  suggestionId: null,
}

export default Search
