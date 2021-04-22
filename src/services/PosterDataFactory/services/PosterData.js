/**
 * @class PosterData
 * @property {object} container
 * @property {number} hoverItem
 * @property {object} movie
 * @property {object} posterImage
 * @property {number} slideItem
 */
export default class PosterData {
  constructor(container, hoverItem, movie) {
    this.slideItem = parseInt(container.class.slice(-1), 10)

    this.hoverItem = hoverItem

    this.movie = movie

    this.container = this.setContainer(container)

    this.posterImage = {
      backgroundImage: `url(${movie.photo})`,
      backgroundSize: '100% 100%'
    }
  }

  setContainer(container) {
    if (this.slideItem === this.hoverItem) {
      container.class += ' mouseOver'
    }

    return container
  }
}
