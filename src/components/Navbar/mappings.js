export const mapStateToProps = (state) => {
  const { genres } = state

  if (genres === undefined) return { genres: [] }

  return { genres: genres.list }
}
