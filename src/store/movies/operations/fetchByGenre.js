import { API_URL } from '../../constants'

export default async function fetchByGenre(id, page, slideLength) {
  try {
    const url = `${API_URL}/movies/paginated-list/${id}/${slideLength}/${page}`

    const response = await fetch(url)

    const movies = await response.json()

    return movies
  } catch(error) {
    console.error(error.message)
  }
}
