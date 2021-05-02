import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

import { API } from 'store'

import PosterList from '../PosterList'

import { buildMovieRows } from './utils'

import './Results.styles.scss'

const Results = ({ movies, name }) => {
  const slideLength = useSelector(API.slideLength.get)

  if (slideLength === null || movies === null) return null

  const rows = buildMovieRows(movies, slideLength)

  return (
    <Row>
      {rows.map((row, index) => (
        <Col
          key={`static_slide_${index}`}
          className="static_column"
        >
          <div className="sliderContent">
            <PosterList
              movies={row}
              name={name}
              slideLength={slideLength}
              type="static"
            />
          </div>
        </Col>
      ))}
    </Row>
  )
}

Results.propTypes = {
  name: PropTypes.string.isRequired,
  movies: PropTypes.array,
}

Results.defaultProps = {
  movies: null,
}

export default Results
