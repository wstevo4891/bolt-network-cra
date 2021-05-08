const TRANSFORMATIONS = {
  2: -150,
  3: -133.33333333333334,
  4: -125,
  5: -120,
  6: -116.66666666666667
}

export default class TranslateCalculator {
  constructor(slideLength, start, next, prev) {
    this.slideLength = slideLength
    this.start = start
    this.next = next
    this.prev = prev
  }

  call() {
    if (this.start) {
      return this.startStyle()
    } else {
      return this.transformStyle()
    }
  }

  startStyle() {
    if (this.next) {
      return this.translate3D(-100)
    } else {
      return this.translate3D()
    }
  }

  transformStyle() {
    const translateX = TRANSFORMATIONS[this.slideLength]

    if (this.next) {
      return this.translate3D(translateX - 100)

    } else if (this.prev) {
      return this.translate3D(translateX + 100)

    } else {
      return this.translate3D(translateX)
    }
  }

  translate3D(translateX = 0) {
    return { transform: `translate3d(${translateX}%, 0px, 0px)` }
  }
}
