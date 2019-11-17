// HomePage Component

import React from 'react'

import Carousel from './Carousel'
import GenreSlider from './GenreSlider'

const HomePage = (props) => (
  <main className="application">
    <Carousel />

    <div className="container">
      <div className="row justify-content-center">
        <div className="supporting col-12">
          <h1>A world of movies at your fingertips</h1>
          <p>Choose from the latest titles, with new movies added every day</p>
        </div>
      </div>
    </div>

    <div className='genre-sliders-container'>
      {
        props.genres.map((genre, index) =>
          <GenreSlider
            key={index}
            genre={genre}
            movies={props.moviesIndex[genre]}
            slideLength={props.slideLength}
          />
        )
      }
    </div>

    <div className="feature">
      <div className="container">
        <h2>Available everywhere</h2>
        <p>Start watching on one device, and pick up where you left off on another device</p>
      </div>
    </div>
  </main>
)

export default HomePage
