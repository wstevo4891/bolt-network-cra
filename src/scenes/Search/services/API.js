import axios from 'axios'

const URI = 'http://localhost:3001/api/v1'

export default {
  search: {
    get: (query) => axios.get(`${URI}/search/${query}`)
  }
}
