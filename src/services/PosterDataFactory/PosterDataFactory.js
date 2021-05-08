import { ContainerFactory } from '..'

import PosterParams from './PosterParams'

export default class PosterDataFactory {
  constructor(props) {
    const params = new PosterParams(props)

    this.containerFactory = new ContainerFactory(params)
  }

  build(movie, index) {
    const container = this.containerFactory.build(index)

    return {
      container,
      movie,
      posterImage: {
        backgroundImage: `url(${movie.photo})`,
        backgroundSize: '100% 100%'
      },
    }
  }
}
