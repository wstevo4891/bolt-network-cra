import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SessionListAPI } from 'services'

import { ToggleIconButton } from '../IconButton'

class ToggleListButton extends Component {
  state = {
    inList: null
  }

  render() {
    const { inList } = this.state

    if (inList === null) return null

    const { buttonProps, options, text, textPlacement } = this.props

    return(
      <ToggleIconButton
        callback={this.toggleList}
        buttonProps={buttonProps}
        options={options}
        status={inList}
        text={text}
        textPlacement={textPlacement}
      />
    )
  }

  toggleList = () => {
    const { movie, listName, updateContainer } = this.props

    if (this.state.inList) {
      SessionListAPI.remove(movie, listName)
    } else {
      SessionListAPI.add(movie, listName)
    }

    this.setState(
      (prevState) => ({ inList: !prevState.inList }),
      updateContainer
    )
  }

  componentDidMount() {
    const { movie, listName } = this.props

    const movieInList = SessionListAPI.findMovie(movie, listName)

    this.setState({ inList: movieInList })
  }
}

ToggleListButton.propTypes = {
  listName: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonProps: PropTypes.object,
  updateContainer: PropTypes.func,
  text: PropTypes.string,
  textPlacement: PropTypes.string
}

ToggleListButton.defaultProps = {
  buttonProps: {},
  updateContainer: () => void {},
  text: null,
  textPlacement: 'left'
}

export default ToggleListButton
