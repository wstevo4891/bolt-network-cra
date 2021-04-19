import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './SuggestionsList.styles.scss'

const SuggestionsList = ({ suggestions, handleClick }) => (
  <ul className="suggestions_list">
    {suggestions.map((suggestion, index) => (
      <li
        key={index.toString()}
        onClick={handleClick}
      >
        <Link to={suggestion.link}>
          {suggestion.name}
        </Link>
      </li>
    ))}
  </ul>
)

SuggestionsList.propTypes = {
  handleClick: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
}

export default SuggestionsList
