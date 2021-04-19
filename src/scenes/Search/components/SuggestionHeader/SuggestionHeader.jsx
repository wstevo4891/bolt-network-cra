import React from 'react'
import PropTypes from 'prop-types'

import { headerText } from './utils'

import './SuggestionHeader.styles.scss'

const SuggestionHeader = ({ suggestionId, suggestion }) => {
  if (suggestionId === undefined) return null

  const text = headerText(suggestionId, suggestion)

  return(
    <div className="col-12">
      <div className="suggestionHeader">
        <div className="title">
          {text}
        </div>
      </div>
    </div>
  )
}

SuggestionHeader.propTypes = {
  suggestion: PropTypes.string,
  suggestionId: PropTypes.string,
}

SuggestionHeader.defaultProps = {
  suggestion: null,
  suggestionId: undefined,
}

export default SuggestionHeader
