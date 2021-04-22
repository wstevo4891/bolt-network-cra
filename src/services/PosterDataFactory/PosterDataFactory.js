import {
  ContainerFactory,
  HoverStyleFactory,
} from '..'

import { PosterData, PosterParams } from './services'

export default class PosterDataFactory {
  constructor(props) {
    const params = new PosterParams(props)

    this.hoverItem = params.hoverItem

    this.containerFactory = new ContainerFactory(params)

    this.styleFactory = new HoverStyleFactory(params)
  }

  build(movie, index) {
    const container = this.buildContainer(index)

    return new PosterData(container, this.hoverItem, movie)
  }

  buildContainer(index) {
    const containerClass = this.containerFactory.build(index)

    const containerStyle = this.styleFactory.build(index)

    return {
      className: containerClass,
      style: containerStyle,
    }
  }
}
