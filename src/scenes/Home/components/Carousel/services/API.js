// app/javascript/main_two/api.js

import axios from 'axios'

const URI = 'http://localhost:3001/api/v1/movies/search'

export default {
  movies: {
    search: (titles) => axios.post(URI, { titles: titles })
  }
}
