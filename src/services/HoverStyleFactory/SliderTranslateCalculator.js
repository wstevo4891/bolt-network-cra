// Slider Translate Calculator

import StaticTranslateCalculator from './StaticTranslateCalculator'

class SliderTranslateCalculator extends StaticTranslateCalculator {
  constructor(params) {
    super(params)
    this.start = params.start
    this.limit = params.limit
    this.end = this.setEndValue()
    this.hoverItem = this.setHoverItem()
  }

  setEndValue() {
    return this.start ? this.slideLength - 1 : this.limit - 1
  }

  setHoverItem() {
    return this.start ? this.hoverItem : this.hoverItem + this.slideLength
  }

  call(index) {
    if (index < this.hoverItem) {
      return this.beforeHoverTranslate()
  
    } else if (index === this.hoverItem) {
      return this.currentPositionTranslate(index)
  
    } else if (index > this.hoverItem) {
      return this.afterHoverTranslate()
    }
  }

  beforeHoverTranslate() {
    if (
      this.start === false &&
      this.hoverItem === this.slideLength + 1
    ) return null

    return this.negativeTranslate()
  }

  calcCurrentTranslate(index) {
    if (this.isBookEndPosition(index)) {
      return Math.floor((this.translateX / 2) + 5)
  
    } else if (index === this.end) {
      return -Math.floor((this.translateX / 2) + 8)
  
    } else return 0
  }

  isBookEndPosition(position) {
    return (this.start && position === 0) || position === this.slideLength + 1
  }
  
  afterHoverTranslate() {
    if (this.hoverItem === this.end) return null

    if (this.isBookEndPosition(this.hoverItem)) {
      return this.translate3D(this.translateX * 2)
    }
  
    return this.translate3D(this.translateX)
  }
}

export default SliderTranslateCalculator
