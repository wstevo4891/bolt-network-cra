import { API } from 'store'

export const mapStateToProps = (state, ownProps) => {
  const { genres: { index } } = state
  const { slug } = ownProps.match.params

  if (index[slug] === undefined) return { genre: null }

  const genre = index[slug]

  return { genre }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchGenreMovies: (genreId) => dispatch(API.genres.fetchMovies(genreId))
})
