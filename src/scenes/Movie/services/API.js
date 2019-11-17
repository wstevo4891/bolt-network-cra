// Movies API

const URI = 'http://localhost:3001/api/v1/movies'

export default {
  movies: {
    show: async (movieID) => {
      const resp = await fetch(`${URI}/${movieID}`)

      const data = await resp.json()

      return data
    }
  }
}
