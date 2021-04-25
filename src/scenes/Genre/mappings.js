import { API } from 'store'

export const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params
  const genre = state.genres.index[slug]

  return { genre }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchGenreMovies: (genreId) => dispatch(API.genres.fetchMovies(genreId))
})
