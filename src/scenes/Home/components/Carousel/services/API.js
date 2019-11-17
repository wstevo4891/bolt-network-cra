// app/javascript/main_two/api.js

// Carousel Movies API

const URI = 'http://localhost:3001/api/v1/movies/search'

export default {
  movies: {
    search: async (titles) => {
      try {
        const resp = await fetch(URI, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ titles: titles })
        })
  
        const data = await resp.json()
    
        return data
      
      } catch(err) {
        console.error('Error in Carousel Movies API')
        console.error(err)
      }
    }
  }
}
