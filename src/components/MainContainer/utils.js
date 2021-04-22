import {
  BREAKPOINT_1400,
  BREAKPOINT_1100,
  BREAKPOINT_800,
  BREAKPOINT_500,
} from 'utils'

export const BREAKPOINTS = [
  BREAKPOINT_1400,
  BREAKPOINT_1100,
  BREAKPOINT_800,
  BREAKPOINT_500
]

export const DEFAULT = 2

export const SLIDE_LENGTH_MAP = {
  [BREAKPOINT_1400]: 6,
  [BREAKPOINT_1100]: 5,
  [BREAKPOINT_800]: 4,
  [BREAKPOINT_500]: 3,
}

export function currentSlideLength() {
  if (window === undefined) return null

  const width = window.innerWidth

  const slideLength = findSlideLength(width)

  return slideLength || DEFAULT
}

export function findSlideLength(width) {
  for (let point of BREAKPOINTS) {
    if (width >= point) {
      return SLIDE_LENGTH_MAP[point]
    }
  }
}
