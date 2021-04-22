export const mapStateToProps = (state) => {
  const { genres } = state

  if (genres === undefined) return { genres: null }

  return { genres: genres.list }
}
