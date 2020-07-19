import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
  <button
    id={props.id}
    className={props.buttonClass}
    aria-controls={props.ariaControls}
    aria-expanded={props.ariaExpanded}
    aria-haspopup={props.ariaHasPopup}
    aria-hidden={props.ariaHidden}
    aria-label={props.ariaLabel}
    data-toggle={props.dataToggle}
    data-target={props.dataTarget}
    onClick={props.handleClick}
    type="button"
  >
    {props.children}
  </button>
)

Button.propTypes = {
  ariaControls: PropTypes.string,
  ariaExpanded: PropTypes.string,
  ariaHasPopup: PropTypes.string,
  ariaHidden: PropTypes.string,
  ariaLabel: PropTypes.string,
  buttonClass: PropTypes.string,
  children: PropTypes.array,
  dataToggle: PropTypes.string,
  dataTarget: PropTypes.string,
  handleClick: PropTypes.func,
  id: PropTypes.string,
}

Button.defaultProps = {
  ariaControls: null,
  ariaExpanded: null,
  ariaHasPopup: null,
  ariaHidden: null,
  ariaLabel: null,
  buttonClass: null,
  dataToggle: null,
  dataTarget: null,
  handleClick: () => void {},
  id: null,
}

export default Button
