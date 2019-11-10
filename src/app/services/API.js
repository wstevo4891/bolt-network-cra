import axios from 'axios'

const URI = 'http://localhost:3001/api/v1'

export default {
  genres: {
    index: () => axios.get(URI + '/genres')
  }
}
