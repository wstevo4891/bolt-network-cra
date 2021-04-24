import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ToggleListButton } from 'components'

const SlideButtons = ({ movie }) => (
  <div className="slide-buttons">
    <Link to={movie.url} className="btn-blue" id="play">
      <FontAwesomeIcon icon={faPlay} />PLAY
    </Link>

    <ToggleListButton
      buttonProps={{
        buttonClass: 'btn-clear'
      }}
      options={[faCheck, faPlus]}
      text='MY LIST'
      movie={movie}
      listName="MyList"
    />
  </div>
)

SlideButtons.propTypes = {
  movie: PropTypes.object.isRequired
}

export default SlideButtons
