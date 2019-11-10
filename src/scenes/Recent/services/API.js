import axios from 'axios'

const URI = 'http://localhost:3001/api/v1'

export default {
  movies: {
    index: () => axios.get(URI + '/movies'),

    show: (slug) => axios.get(`${URI}/movies/${slug}`),

    byGenre: (genreId) => axios.get(`${URI}/movies/by-genre/${genreId}`),

    recent: () => axios.get(`${URI}/recent-movies`),

    search: (titles) => axios.post(`${URI}/movies/search`, { titles: titles })
  }
}
