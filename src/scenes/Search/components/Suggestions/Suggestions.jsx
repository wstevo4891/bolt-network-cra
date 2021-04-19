import React from 'react'
import PropTypes from 'prop-types'

import SuggestionsLabel from '../SuggestionsLabel'
import SuggestionsList from '../SuggestionsList'

import SuggestionsArray from './SuggestionsArray'

import './Suggestions.styles.scss'

const Suggestions = ({ handleClick, results, query }) => {
  const suggestions = new SuggestionsArray(results, query)

  return (
    <div className="col-12">
      <div className="suggestions">
        <SuggestionsLabel>
          Explore titles related to:&nbsp;
        </SuggestionsLabel>

        <SuggestionsList
          handleClick={handleClick}
          suggestions={suggestions}
        />
      </div>
    </div>
  )
}

Suggestions.propTypes = {
  handleClick: PropTypes.func.isRequired,
  results: PropTypes.shape({
    genres: PropTypes.array,
    movies: PropTypes.array,
    people: PropTypes.array,
  }),
  query: PropTypes.string,
}

Suggestions.defaultProps = {
  results: {
    genres: [],
    movies: [],
    people: [],
  },
  query: null,
}

export default Suggestions
