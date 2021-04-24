export const mapStateToProps = (state) => {
  const { slideLength } = state

  if (slideLength === undefined) {
    return { slideLength: 0 }
  } else {
    return { slideLength: slideLength.value }
  }
}
