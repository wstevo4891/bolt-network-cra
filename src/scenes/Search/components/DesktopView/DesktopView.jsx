import React from 'react'

import SearchResults from '../SearchResults'
import Suggestions from '../Suggestions'
import SuggestionHeader from '../SuggestionHeader'

const DesktopView = ({ handleClick, suggestion, query }) => (
  <>
    <div className="row">
      <Suggestions handleClick={handleClick} query={query} />

      <SuggestionHeader suggestion={suggestion} />
    </div>

    <SearchResults suggestion={suggestion} />
  </>
)

export default DesktopView
