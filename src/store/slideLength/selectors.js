function selectSlideLength(state) {
  const { slideLength } = state

  if (slideLength === undefined) return null

  return slideLength.value
}

export default {
  selectSlideLength,
}
