// Genres API

import axios from 'axios'

const URI = 'http://localhost:3001/api/v1/genres'

export default {
  genres: {
    index: () => axios.get(URI),

    show: (slug) => axios.get(`${URI}/${slug}`)
  }
}
