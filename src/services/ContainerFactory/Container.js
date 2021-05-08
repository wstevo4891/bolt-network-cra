export default class Container {
  constructor(hoverItem, style, slideClass, slideIndex) {
    this.slideIndex = Number(slideIndex)
    this.style = style
    this.className = this.buildContainerClass(hoverItem, slideClass)
  }

  buildContainerClass(hoverItem, slideClass) {
    let containerClass = `${slideClass}-${this.slideIndex}`

    if (hoverItem === this.slideIndex) {
      containerClass += ' mouseOver'
    }

    return containerClass
  }
}
