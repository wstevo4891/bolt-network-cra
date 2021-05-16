import React from 'react'
import PropTypes from 'prop-types'

import { LEFT, RIGHT, noop } from 'utils'

import { ToggleIconButton } from '..'

import { useListState } from './hooks'

const ToggleListButton = ({
  buttonProps,
  listName,
  options,
  movie,
  text,
  textPlacement,
  updateContainer,
}) => {
  const [listState, toggleList] = useListState(movie, listName, updateContainer)

  return(
    <ToggleIconButton
      callback={toggleList}
      buttonProps={buttonProps}
      options={options}
      status={listState}
      text={text}
      textPlacement={textPlacement}
    />
  )
}

ToggleListButton.propTypes = {
  listName: PropTypes.string.isRequired,
  movie: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonProps: PropTypes.object,
  updateContainer: PropTypes.func,
  text: PropTypes.string,
  textPlacement: PropTypes.oneOf([LEFT, RIGHT]),
}

ToggleListButton.defaultProps = {
  buttonProps: {},
  text: null,
  textPlacement: LEFT,
  updateContainer: noop,
}

export default ToggleListButton
