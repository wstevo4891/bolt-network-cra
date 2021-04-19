export default class SuggestionsArray {
  constructor(results, query) {
    this.results = results
    this.query = query
    return this.create()
  }

  create() {
    const { genres, movies, people } = this.results

    const genreLinks = this.buildSuggestions(genres, 'category')
    const movieLinks = this.buildSuggestions(movies, 'title')
    const peopleLinks = this.buildSuggestions(people)

    return [...genreLinks, ...peopleLinks, ...movieLinks]
  }

  buildSuggestions(list, nameKey = 'name') {
    if (list.length === 0) return []

    return list.map(item => ({
      name: item[nameKey],
      link: this.suggestionLink(item.suggestionId)
    }))
  }

  suggestionLink(id) {
    return `/search?q=${this.query}&suggestionId=${id}`
  }
}
