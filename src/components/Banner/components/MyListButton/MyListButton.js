import PropTypes from 'prop-types'
import React from 'react'

import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons'

import { ToggleListButton } from 'components'

import './MyListButton.styles.scss'

const MyListButton = ({ movie }) => {
  const buttonProps = {
    buttonClass: 'btn-clear'
  }

  return (
    <ToggleListButton
      buttonProps={buttonProps}
      options={[faCheck, faPlus]}
      text="MY LIST"
      textPlacement="right"
      movie={movie}
      listName="MyList"
    />
  )
}

MyListButton.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default MyListButton
