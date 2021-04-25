import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { faAngleDown  } from '@fortawesome/free-solid-svg-icons'

import { IconButton } from 'components'

import Menu from './Menu'

import './Dropdown.styles.scss'

const Dropdown = (props) => {
  let navItemClass

  const { id, dropdownId, links, path, pathRegex, text } = props

  const [showMenu, setShowMenu] = useState(false)
  const toggleShow = () => setShowMenu(!showMenu)

  useEffect(() => {
    const handleMouseUp = (event) => {
      if (event.target.id === dropdownId) {
        toggleShow()
      } else {
        setShowMenu(false)
      }
    }

    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  })

  if (path.match(pathRegex)) {
    navItemClass = "nav-item dropdown active"
  } else {
    navItemClass = "nav-item dropdown"
  }

  const buttonProps = {
    ariaExpanded: 'false',
    ariaHasPopup: 'true',
    buttonClass: 'nav-link',
    id: dropdownId,
  }

  return(
    <li id={id} className={navItemClass}>
      <IconButton
        buttonProps={buttonProps}
        icon={faAngleDown}
        text={text}
        textPlacement="left"
      />

      <Menu
        dropdownId={dropdownId}
        links={links}
        showMenu={showMenu}
      />
    </li>
  )
}

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  dropdownId: PropTypes.string,
  links: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
  pathRegex: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
}

Dropdown.defaultProps = {
  dropdownId: 'dropdownMenu'
}

export default Dropdown
