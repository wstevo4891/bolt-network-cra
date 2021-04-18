import PropTypes from 'prop-types'
import React, { useEffect } from 'react'

const MainContainer = ({ children, setSlideLength, slideLength }) => {
  useEffect(() => {
    window.addEventListener('resize', setSlideLength)

    return () => window.removeEventListener('resize', setSlideLength)
  })

  if (slideLength === null) {
    setSlideLength()
    return null
  }

  return (
    <div id="main-container">
      {children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.array,
  setSlideLength: PropTypes.func.isRequired,
  slideLength: PropTypes.number,
}

MainContainer.defaultProps = {
  children: null,
  slideLength: null
}

export default MainContainer
