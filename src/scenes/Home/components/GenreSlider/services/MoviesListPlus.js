// app/javascript/genre_sliders_plus/services/MoviesList.js

import LinkedList from '../structures/LinkedList';

// const LENGTH_MAP = {
//   6: 24,
//   5: 20,
//   4: 20,
//   3: 18,
//   2: 12
// }

// Service for building linked list of movie objects
export default class MoviesList {
  constructor(props) {
    this.slideLength = props.slideLength
    this.movies = this.sliceMovies(props.movies)
    this.list = new LinkedList()
  }

  sliceMovies = (movies) => {
    if (this.slideLength === 6) return movies

    const LENGTH_MAP = {
      6: 24,
      5: 20,
      4: 20,
      3: 18,
      2: 12
    }

    const lastIndex = LENGTH_MAP[this.slideLength] + 1

    return movies.slice(0, lastIndex)
  }

  call = () => {
    if (this.movies === null || this.movies.length <= 1) return []

    this.buildListPlus()

    return this.list
  }

  buildListPlus = () => {
    let slideCount = 0
    let slide = []

    for (let movie of this.movies) {
      slide.push(movie)
      slideCount++

      if (slideCount === this.slideLength) {
        this.list.add(slide)
        slide = []
        slideCount = 0
      }
    }
  }

  buildList = () => {
    this.slideIndex = 1
    this.movieIndex = 0
    this.arr = []

    for (let movie of this.movies) {
      this.arr.push(movie)
      this.movieIndex++
  
      this.addToList()
    }
  }

  addToList = () => {
    if (this.movieIndex === this.movies.length) {
      this.list.add(this.arr)

    } else if (this.slideIndex < this.slideLength) {
      this.slideIndex++

    } else {
      this.list.add(this.arr)
      this.arr = []
      this.slideIndex = 1
    }
  }
}
