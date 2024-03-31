function selectList(state) {
  const { genres } = state

  if (genres === undefined) return null

  if (genres.list.length === 0) return null

  return genres.list
}

export default {
  selectList,
}
