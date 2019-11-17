// app/javascript/main/components/Navbar/components/SearchInput.jsx

import React from 'react'

export const SearchInput = (props) => {
  const pushLocation = () => {
    if (props.location === '/search') {
      props.history.push('/')
    } else {
      props.history.push(props.location)
    }
  }

  const handleKeyUp = (event) => {
    const query = event.target.value

    if (query && query !== '') {
      props.history.push(`/search?q=${encodeURIComponent(query)}`)
    } else {
      pushLocation()
    }

    if (props.update) props.update(query)

    props.handleChange(query)
  }

  return(
    <input
      type="text"
      name="query"
      id="search"
      className="form-control"
      maxLength="80"
      placeholder={props.placeholder}
      aria-label={props.placeholder}
      onKeyUp={(event) => handleKeyUp(event)}
    />
  )
}
