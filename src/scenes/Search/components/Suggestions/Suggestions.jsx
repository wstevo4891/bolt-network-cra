import PropTypes from 'prop-types'
import React from 'react'
import { useSelector } from 'react-redux'

import { API } from 'store'

import { SuggestionsLabel, SuggestionsList } from '..'

import SuggestionsArray from './SuggestionsArray'

import './Suggestions.styles.scss'

const Suggestions = ({ handleClick, query }) => {
  const results = useSelector(API.search.selectResults)

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
  query: PropTypes.string,
}

Suggestions.defaultProps = {
  query: null,
}

export default Suggestions
