import React from 'react'
import { useSelector } from 'react-redux'

import { API } from 'store'

import { Banner } from 'components'

import {
  FeatureSection,
  GenreSlidersSection,
  WelcomeSection,
} from './components'

import './Home.styles.scss'

const Home = () => {
  const genres = useSelector(API.genres.selectList)

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

export default Home
