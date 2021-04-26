import PropTypes from 'prop-types'
import React from 'react'

import './BackgroundImage.styles.scss'

const BackgroundImage = ({ children, url }) => {
  const imageStyle = {
    backgroundImage: `url(${url})`,
  }

  return (
    <div className="background_image" style={imageStyle}>
      {children}
    </div>
  )
}

BackgroundImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default BackgroundImage
