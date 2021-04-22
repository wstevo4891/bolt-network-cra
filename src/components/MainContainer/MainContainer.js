import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { API } from 'store'

class MainContainer extends Component {
  state = {
    slideLength: null,
  }

  render() {
    const { slideLength } = this.state

    if (slideLength === null) return null

    return (
      <div id="main-container">
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    this.updateSlideLength()

    window.addEventListener("resize", this.updateSlideLength)
  }

  // TODO: deBounce this function
  updateSlideLength = () => {
    const newLength = this.props.dispatch(API.slideLength.set())

    this.setState((prevState) => {
      if (newLength === prevState.slideLength) return prevState

      return { slideLength: newLength }
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateSlideLength)
  }
}

// const MainContainer = ({ children, setSlideLength, slideLength }) => {
//   useEffect(() => {
//     window.addEventListener('resize', setSlideLength)

//     return () => window.removeEventListener('resize', setSlideLength)
//   })

//   if (slideLength === null) {
//     setSlideLength()
//     return null
//   }

//   return (
//     <div id="main-container">
//       {children}
//     </div>
//   )
// }

MainContainer.propTypes = {
  children: PropTypes.array,
  dispatch: PropTypes.func,
  // setSlideLength: PropTypes.func.isRequired,
  // slideLength: PropTypes.number,
}

MainContainer.defaultProps = {
  children: null,
  // slideLength: null
}

export default MainContainer
