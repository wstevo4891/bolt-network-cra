import React from 'react'
import PropTypes from 'prop-types'

import './PaginationList.styles.scss'

const PaginationList = ({ page, pageCount }) => {
  const pageIndex = (page === 0) ? page : page - 1

  // Make a range of integers using the number of pages
  const items = [...Array(pageCount).keys()]

  return(
    <ul className="pagination_indicator">
      {items.map(index => {
        if (index !== pageIndex) return <li key={index}></li>

        return <li key={index} className="active"></li>
      })}
    </ul>
  )
}

PaginationList.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
}

export default PaginationList
