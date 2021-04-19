import React from 'react'
import PropTypes from 'prop-types'

import PosterList from '../PosterList'

import { buildMovieRows } from './utils'

import './Results.styles.scss'

const Results = ({ movies, name, slideLength }) => {
  const rows = buildMovieRows(movies, slideLength)

  return (
    <div className="row">
      {rows.map((row, index) => (
        <div
          key={`static_slide_${index}`}
          className="col-12"
          style={{ marginBottom: '5.5vw' }}
        >
          <div className="sliderContent">
            <PosterList
              movies={row}
              name={name}
              slideLength={slideLength}
              type="static"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

Results.propTypes = {
  name: PropTypes.string.isRequired,
  movies: PropTypes.array,
  slideLength: PropTypes.number.isRequired,
}

Results.defaultProps = {
  movies: null,
}

export default Results
