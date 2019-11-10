// Home Page API: MoviesIndex

import axios from 'axios'

const URI = 'http://localhost:3001/api/v1/movies-index/'

export default {
  moviesIndex: {
    get: (slideLength) => axios.get(`${URI}${slideLength}`)
  },
}
