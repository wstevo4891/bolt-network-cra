// Movies Index API

const URI = 'http://localhost:3001/api/v1'

export default {
  moviesIndex: {
    get: async () => {
      const response = await fetch(`${URI}/movies-index`)

      const data = await response.json()

      return data
    }
  }
}
