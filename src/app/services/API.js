import axios from 'axios'

const URI = 'http://localhost:3001/api/v1'

export default {
  genres: {
    index: () => axios.get(URI + '/genres')
  },

  genresXHR: {
    index: () => {
      // create a new XMLHttpRequest
      const xhr = new XMLHttpRequest()

      // get a callback when the server responds
      xhr.addEventListener('load', () => {
        console.log('XHR Response')
        console.log(xhr.responseText)

        return xhr.responseText
      })

      xhr.open('GET', URI + '/genres')

      xhr.send()
    }
  }
}
