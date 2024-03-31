function selectBannerMovies(state) {
  const { bannerMovies } = state

  if (bannerMovies === undefined) return { movies: null }

  return { movies: bannerMovies.value }
}

export default {
  select: selectBannerMovies,
}
