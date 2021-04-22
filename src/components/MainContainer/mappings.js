// import { API } from 'store'

export const mapStateToProps = (state) => {
  const { slideLength } = state

  if (slideLength === undefined) {
    return { slideLength: null }
  } else {
    return { slideLength }
  }
}

// export const mapDispatchToProps = (dispatch) => {
//   return {
//     setSlideLength: (dispatch) => dispatch(API.slideLength.set()),
//   }
// }
