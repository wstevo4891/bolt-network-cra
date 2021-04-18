import { slideLength as API } from 'store/api'

export const mapStateToProps = (state) => ({
  slideLength: state.slideLength.value
})

export const mapDispatchToProps = (dispatch) => ({
  setSlideLength: () => dispatch(API.set())
})
