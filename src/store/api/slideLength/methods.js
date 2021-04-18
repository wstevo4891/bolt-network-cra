// Actions
import {
  setSlideLengthBegin,
  setSlideLengthSuccess,
  setSlideLengthFailure
} from '../../actions'

import { currentSlideLength } from './utils'

export function setSlideLengthValue() {
  return async (dispatch) => {
    try {
      dispatch(setSlideLengthBegin)

      const slideLength = await currentSlideLength()

      dispatch(setSlideLengthSuccess(slideLength))

      return slideLength
    } catch(error) {
      dispatch(setSlideLengthFailure(error))
    }
  }
}
