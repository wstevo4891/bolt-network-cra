import {
  setSlideLengthBegin,
  setSlideLengthSuccess,
  setSlideLengthFailure
} from '../actions'

import {
  BREAKPOINTS,
  DEFAULT,
  SLIDE_LENGTH_MAP,
} from './constants'

export function findSlideLength(width) {
  for (let point of BREAKPOINTS) {
    if (width >= point) {
      return SLIDE_LENGTH_MAP[point]
    }
  }
}

export function currentSlideLength() {
  if (window === undefined) return 0

  const slideLength = findSlideLength(window.innerWidth)

  return slideLength || DEFAULT
}

export default function setSlideLength() {
  return (dispatch) => {
    try {
      dispatch(setSlideLengthBegin())

      const slideLength = currentSlideLength()

      dispatch(setSlideLengthSuccess(slideLength))
    } catch(error) {
      dispatch(setSlideLengthFailure(error))
    }
  }
}