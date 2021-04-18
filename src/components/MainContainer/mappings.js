import API from 'store'

export const mapStateToProps = (state) => ({
  slideLength: state.slideLength.value
})

export const mapDispatchToProps = (dispatch) => ({
  setSlideLength: () => dispatch(API.slideLength.set())
})
