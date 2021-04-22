// Actions
import {
  setSlideLengthBegin,
  setSlideLengthSuccess,
  setSlideLengthFailure
} from '../../actions'

import { currentSlideLength } from './utils'

export function setSlideLengthValue() {
  return (dispatch) => {
    try {
      dispatch(setSlideLengthBegin)

      const slideLength = currentSlideLength()

      dispatch(setSlideLengthSuccess(slideLength))

      return slideLength
    } catch(error) {
      dispatch(setSlideLengthFailure(error))
    }
  }
}
