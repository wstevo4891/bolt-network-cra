import { SLIDER, STATIC } from 'utils'

import SliderTranslateCalculator from './SliderTranslateCalculator'

import StaticTranslateCalculator from './StaticTranslateCalculator'

const CUBIC_BEZIER = 'cubic-bezier(0.5, 0, 0.1, 1)'

const DEFAULT_TRANSLATE = 'translate3d(0px, 0px, 0px)'

const DELAY = '0ms'

const DURATION = '400ms'

export default class HoverStyleFactory {
  constructor(params) {
    this.hoverItem = params.hoverItem
    this.calculator = this.setCalculator(params)
  }

  setCalculator(params) {
    if (params.type === SLIDER) {
      return new SliderTranslateCalculator(params)

    } else if (params.type === STATIC) {
      return new StaticTranslateCalculator(params)

    } else return null
  }

  build(index) {
    if (this.hoverItem === null) return this.hoverStyle()

    const translateValue = this.calculator.call(index)

    return this.hoverStyle(translateValue)
  }

  hoverStyle(translateValue = null) {
    const transform = translateValue || DEFAULT_TRANSLATE

    return {
      transform,
      transitionDuration: DURATION,
      transitionTimingFunction: CUBIC_BEZIER,
      transitionDelay: DELAY,
    }
  }
}
