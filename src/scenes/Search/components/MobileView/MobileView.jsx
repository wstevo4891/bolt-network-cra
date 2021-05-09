import PropTypes from 'prop-types'
import React from 'react'

import SearchResults from '../SearchResults'

import Suggestions from '../Suggestions'

import SuggestionsLabel from '../SuggestionsLabel'

const MobileView = ({ handleClick, suggestion, query }) => (
  <>
    <div className="row">
      <div className="col-12 mb-2">
        <SuggestionsLabel>
          Results for &quot;{query}&quot;
        </SuggestionsLabel>
      </div>
    </div>

    <SearchResults suggestion={suggestion} />

    <div className="row">
      <Suggestions handleClick={handleClick} query={query} />
    </div>
  </>
)

MobileView.propTypes = {
  resultsProps: PropTypes.object.isRequired,
  suggestionsProps: PropTypes.object.isRequired,
}

export default MobileView
