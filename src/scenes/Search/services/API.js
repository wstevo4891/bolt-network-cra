// Search API

const URI = 'http://localhost:3001/api/v1/search'

export default {
  search: {
    get: async (query) => {
      const resp = await fetch(`${URI}/${query}`)

      const data = await resp.json()

      return data
    }
  }
}
