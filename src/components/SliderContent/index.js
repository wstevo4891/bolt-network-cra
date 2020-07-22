import React from 'react'
import PropTypes from 'prop-types'

import './SliderContent.styles.scss'

class ContainerProps {
  constructor(next, prev, style) {
    this.className = this.containerClass(next, prev)

    if (style) {
      this.style = style
    }
  }

  containerClass(next, prev) {
    if (next || prev) return 'sliderContent animating'
  
    return 'sliderContent'
  }
}

const SliderContent = (props) => {
  const containerProps = new ContainerProps(props.next, props.prev, props.style)

  return (
    <div {...containerProps}>
      {props.children}
    </div>
  )
}

SliderContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  next: PropTypes.bool,
  prev: PropTypes.bool,
  style: PropTypes.object,
}

SliderContent.defaultProps = {
  next: false,
  prev: false,
  style: null,
}

export default SliderContent
