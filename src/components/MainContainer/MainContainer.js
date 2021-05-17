import PropTypes from 'prop-types'
import React from 'react'

import { useSlideLengthManager } from './hooks'

const MainContainer = ({ children }) => {
  const slideLength = useSlideLengthManager()

  if (slideLength === null) return null

  return (
    <div id="main-container" data-testid="main-container">
      {children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
}

MainContainer.defaultProps = {
  children: null,
}

export default MainContainer
