import API from 'store'

export const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (titles) => dispatch(API.bannerMovies.fetch(titles))
})

export const mapStateToProps = (state) => ({
  movies: state.bannerMovies.value
})
