export default class Container {
  constructor(hoverItem, style, slideClass, slideIndex) {
    this.hoverItem = Number(hoverItem)
    this.slideIndex = Number(slideIndex)
    this.style = style
    this.className = this.buildContainerClass(slideClass)
  }

  buildContainerClass(slideClass) {
    let containerClass = `${slideClass}-${this.slideIndex}`

    if (this.hoverItem === this.slideIndex) {
      containerClass += ' mouseOver'
    }

    return containerClass
  }
}
