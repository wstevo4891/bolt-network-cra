import React from 'react'

import SearchResults from '../SearchResults'
import Suggestions from '../Suggestions'
import SuggestionHeader from '../SuggestionHeader'

const DesktopView = ({ handleClick, suggestionProps, query }) => (
  <>
    <div className="row">
      <Suggestions handleClick={handleClick} query={query} />

      <SuggestionHeader {...suggestionProps} />
    </div>

    <SearchResults {...suggestionProps} />
  </>
)

export default DesktopView
