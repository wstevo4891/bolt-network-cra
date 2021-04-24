import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { API } from 'store'

const MainContainer = ({ children, slideLength }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const setSlideLength = () => {
      dispatch(API.slideLength.set())
    }

    setSlideLength()

    window.addEventListener('resize', setSlideLength)

    return () => window.removeEventListener('resize', setSlideLength)
  }, [dispatch])

  if (slideLength === 0) return null

  return (
    <div id="main-container">
      {children}
    </div>
  )
}

MainContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  slideLength: PropTypes.number.isRequired,
}

MainContainer.defaultProps = {
  children: null,
}

export default MainContainer
