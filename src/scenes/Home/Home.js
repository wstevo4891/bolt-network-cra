// Home Page Functional Component

import PropTypes from 'prop-types'
import React from 'react'

import { Banner } from 'components'

import FeatureSection from './FeatureSection'
import GenreSlidersSection from './GenreSlidersSection'
import WelcomeSection from './WelcomeSection'

import './Home.styles.scss'

const Home = ({ genres }) => {
  if (genres === null) return null

  return (
    <main className="application">
      <Banner />
      <WelcomeSection />
      <GenreSlidersSection genres={genres} />
      <FeatureSection />
    </main>
  )
}

Home.propTypes = {
  genres: PropTypes.array.isRequired,
}

export default Home
