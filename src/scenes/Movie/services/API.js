import axios from 'axios'

const URI = 'http://localhost:3001/api/v1/movies'

export default {
  movies: {
    index: () => axios.get(URI),

    show: (movieID) => axios.get(`${URI}/${movieID}`),

    byGenre: (genreId) => axios.get(`${URI}/by-genre/${genreId}`),

    recent: () => axios.get(`${URI}/recent`),

    search: (titles) => axios.post(`${URI}/search`, { titles: titles })
  }
}
