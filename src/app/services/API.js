// Movies Index API

const URI = 'http://localhost:3001/api/v1'

export default {
  moviesIndex: {
    fetch: fetch(`${URI}/movies-index`),

    get: async () => {
      const response = await fetch(`${URI}/movies-index`)

      const data = await response.json()

      return data
    }
  },

  search: {
    get: async (query) => {
      const resp = await fetch(`${URI}/search/${query}`)

      const data = await resp.json()

      return data
    }
  }
}
