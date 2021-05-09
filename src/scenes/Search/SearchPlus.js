import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

import { SearchContainer, ViewSelect } from './components'

import { parseParams } from './utils'

const Search = (props) => {
  const dispatch = useDispatch()

  const [suggestion, setSuggestion] = useState(null)

  const handleClick = (event) => setSuggestion(event.target.text)

  const { query, suggestionId } = parseParams(props.location.search)

  const suggestionProps = { suggestion, suggestionId }

  useEffect(() => {
    dispatch(API.suggestions.fetch(suggestionId))
  }, [dispatch, suggestionId])

  return (
    <SearchContainer>
      <ViewSelect
        handleClick={handleClick}
        suggestionProps={suggestionProps}
        query={query}
      />
    </SearchContainer>
  )
}

Search.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Search
