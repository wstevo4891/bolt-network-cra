import React from 'react'
import PropTypes from 'prop-types'

import './TitleRow.styles.scss'

const TitleRow = ({ title }) => (
  <div className="row">
    <div className="col-12 mb-4">
      <h1 className="page_title">{title}</h1>
    </div>
  </div>
)

TitleRow.propTypes = {
  title: PropTypes.string.isRequired,
}

export default TitleRow
