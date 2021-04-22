const POSTER_CONTAINER = 'poster-container'

export default class ContainerFactory {
  constructor(params) {
    this.type = params.type
    this.start = params.start
    this.slideLength = params.slideLength
    this.limit = params.limit
  }

  build(index) {
    if (this.type === 'static') {
      return `${POSTER_CONTAINER} slide-item-${index}`

    } else {
      return this.sliderPosterContainer(index)
    }
  }

  sliderPosterContainer(index) {
    if (this.start) return this.startContainer(index)

    if (index >= this.slideLength && index <= this.limit) {

      return `${POSTER_CONTAINER} slide-item-${index - this.slideLength}`

    } else {
      return `${POSTER_CONTAINER} slider-item-`
    }
  }

  startContainer(index) {
    if (index <= this.slideLength) {
      return `${POSTER_CONTAINER} slide-item-${index}`
    } else {
      return `${POSTER_CONTAINER} slider-item-`
    }
  }
}
