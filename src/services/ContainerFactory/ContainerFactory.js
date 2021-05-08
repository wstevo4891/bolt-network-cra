import { STATIC } from 'utils'

import HoverStyleFactory from '../HoverStyleFactory'

import Container from './Container'

const NULL_INDEX = ''

const SLIDE_ITEM = 'slide-item'

const SLIDER_ITEM = 'slider-item'

export default class ContainerFactory {
  constructor(params) {
    this.styleFactory = new HoverStyleFactory(params)
    this.hoverItem = params.hoverItem
    this.limit = params.limit
    this.slideLength = params.slideLength
    this.start = params.start
    this.type = params.type
  }

  build(index) {
    const style = this.styleFactory.build(index)

    const params = this.containerParams(index)

    return new Container(this.hoverItem, style, ...params)
  }

  containerParams(index) {
    if (this.type === STATIC) {
      return [SLIDE_ITEM, index]

    } else {
      return this.sliderParams(index)
    }
  }

  sliderParams(index) {
    if (this.start) return this.startParams(index)

    if (index >= this.slideLength && index <= this.limit) {
      return [SLIDE_ITEM, index - this.slideLength]
    }

    return [SLIDER_ITEM, NULL_INDEX]
  }

  startParams(index) {
    if (index <= this.slideLength) {
      return [SLIDE_ITEM, index]
    }

    return [SLIDER_ITEM, NULL_INDEX]
  }
}
