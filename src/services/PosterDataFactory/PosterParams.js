import { SLIDER, STATIC } from 'utils'

export default class PosterParams {
  constructor(props) {
    this.type = props.type
    this.slideLength = props.slideLength
    this.hoverItem = props.hoverItem
    this.setTypeAttributes(props.start)
  }

  setTypeAttributes(start) {
    if (this.type === STATIC) {
      this.end = this.slideLength - 1

    } else if (this.type === SLIDER) {
      this.start = start
      this.limit = (this.slideLength * 2) + 1
    }
  }
}
