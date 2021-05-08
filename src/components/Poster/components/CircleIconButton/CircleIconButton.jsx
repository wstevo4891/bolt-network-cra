import React from 'react'
import PropTypes from 'prop-types'

import { noop } from 'utils'

import { ToggleIconButton, ToggleListButton } from 'components'

import './CircleIconButton.styles.scss'

const CircleIconButton = (props) => {
  const buttonProps = { buttonClass: 'circle-icon-btn' }

  if (props.status && props.type) {
    buttonProps.buttonClass = `circle-icon-btn ${props.type} ${props.status}`
  }

  if (props.listName === null) {
    return <ToggleIconButton buttonProps={buttonProps} options={props.options} />
  }

  return (
    <ToggleListButton
      buttonProps={buttonProps}
      listName={props.listName}
      movie={props.movie}
      options={props.options}
      updateContainer={props.callback}
    />
  )
}

CircleIconButton.propTypes = {
  callback: PropTypes.func,
  listName: PropTypes.string,
  movie: PropTypes.object,
  options: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

CircleIconButton.defaultProps = {
  callback: noop,
  listName: null,
  movie: null,
  status: null,
  type: null,
}

export default CircleIconButton
