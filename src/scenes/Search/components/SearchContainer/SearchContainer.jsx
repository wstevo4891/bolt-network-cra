import PropTypes from 'prop-types'
import React from 'react'

import { DisplayContainer } from 'components'

import './SearchContainer.styles.scss'

const SearchContainer = ({ children }) => (
  <section className="search_container">
    <DisplayContainer>
      {children}
    </DisplayContainer>
  </section>
)

SearchContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default SearchContainer
