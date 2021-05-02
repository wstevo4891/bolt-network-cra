// Actions
import {
  setSlideLengthBegin,
  setSlideLengthSuccess,
  setSlideLengthFailure
} from '../../actions'

import { currentSlideLength } from './utils'

export function setSlideLength() {
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

export function getSlideLength(state) {
  const { slideLength } = state

  if (slideLength === undefined) return null

  return slideLength.value
}
