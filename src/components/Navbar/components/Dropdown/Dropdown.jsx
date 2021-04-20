import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { faAngleDown  } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from 'components/IconButton'

import Menu from './Menu'

class Dropdown extends Component {
  state = {
    show: false
  }

  // this.props.path.match(/\/genres/)

  get navItemClass() {
    const { path, pathRegex } = this.props

    if (path.match(pathRegex)) {
      return "nav-item dropdown active"
    } else {
      return "nav-item dropdown"
    }
  }

  render() {
    const { id, dropdownId, links, text } = this.props

    const buttonProps = {
      ariaExpanded: 'false',
      ariaHasPopup: 'true',
      buttonClass: 'nav-link',
      id: dropdownId,
    }

    return(
      <li id={id} className={this.navItemClass}>
        <IconButton
          buttonProps={buttonProps}
          icon={faAngleDown}
          text={text}
          textPlacement="left"
        />

        <Menu
          dropdownId={dropdownId}
          links={links}
          showMenu={this.state.show}
        />
      </li>
    )
  }

  componentDidMount() {
    document.addEventListener('mouseup', this.handleMouseUp)
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.handleMouseUp)
  }

  handleMouseUp = (event) => {
    if (event.target.id === this.props.dropdownId) {
      this.toggleShow()
    } else {
      this.setState({ show: false })
    }
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }))
  }
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  dropdownId: PropTypes.string,
  links: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  pathRegex: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

Dropdown.defaultProps = {
  dropdownId: 'dropdownMenu'
}

export default Dropdown
