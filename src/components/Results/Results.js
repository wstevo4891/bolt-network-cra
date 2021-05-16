import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Col, Row } from 'reactstrap'

import { API } from 'store'

import { STATIC } from 'utils'

import PosterList from '../PosterList'

import { buildMovieRows } from './utils'

import './Results.styles.scss'

const Results = ({ movies, name }) => {
  const slideLength = useSelector(API.slideLength.get)

  if (slideLength === null || movies === null) return null

  const rows = buildMovieRows(movies, slideLength)

  return (
    <>
      {rows.map((row, index) => (
        <Row key={`static_slide_${index}`} >
          <Col>
            <div className="sliderContent">
              <PosterList
                movies={row}
                name={name}
                slideLength={slideLength}
                type={STATIC}
              />
            </div>
          </Col>
        </Row>
      ))}
    </>
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
