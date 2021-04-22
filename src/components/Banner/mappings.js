// import { API } from 'store'

// export const mapDispatchToProps = (dispatch) => ({
//   fetchMovies: (titles) => dispatch(API.bannerMovies.fetch(titles))
// })

export const mapStateToProps = (state) => {
  const { bannerMovies } = state

  if (bannerMovies === undefined) return { movies: null }

  return {
    movies: bannerMovies.value
  }
}
