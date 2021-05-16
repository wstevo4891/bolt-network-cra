import { useEffect, useState } from 'react'

const CLEAR_STATE = {
  start: false,
  next: false,
  prev: false,
}

const INITIAL_STATE = {
  start: true,
  next: false,
  prev: false,
}

export function arrowClickHandler(fetchSlides, state, setState) {
  return (direction) => {
    setState({ ...state, [direction]: true })

    setTimeout(() => {
      fetchSlides(direction).then(() => setState(CLEAR_STATE))
    }, 1000)
  }
}

export function useSliderState(fetchSlides) {
  const [state, setState] = useState(INITIAL_STATE)

  const handleArrowClick = arrowClickHandler(fetchSlides, state, setState)

  return [handleArrowClick, state]
}

export function setPointerEvents(value) {
  document.getElementById('root').style['pointer-events'] = value
}

export function useSliderEffects(state) {
  useEffect(() => {
    const { start, next, prev } = state

    if (start) return

    if (next || prev) {
      setPointerEvents('none')
    } else {
      setPointerEvents('auto')
    }
  }, [state])
}
