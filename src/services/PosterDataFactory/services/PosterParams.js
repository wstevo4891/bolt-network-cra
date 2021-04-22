import { SLIDER, STATIC } from 'utils'

export default class PosterParams {
  constructor(props) {
    this.type = props.type
    this.slideLength = props.slideLength
    this.hoverItem = props.hoverItem
    this.setTypeAttributes(props.slideLength, props.start)
  }

  setTypeAttributes(slideLength, start) {
    if (this.type === STATIC) {
      this.end = slideLength - 1

    } else if (this.type === SLIDER) {
      this.start = start
      this.limit = (slideLength * 2) + 1
    }
  }
}
