import PropTypes from 'prop-types'
import React from 'react'

const BackgroundImage = ({ children, url }) => {
  const style = {
    backgroundImage: `url(${url})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%'
  }

  return <div style={style}>{children}</div>
}

BackgroundImage.propTypes = {
  url: PropTypes.string.isRequired
}

export default BackgroundImage
