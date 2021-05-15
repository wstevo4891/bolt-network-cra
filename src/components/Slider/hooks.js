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

export function arrowClickHandler(fetchSlides, sliderState, setSliderState) {
  return (direction) => {
    setSliderState({ ...sliderState, [direction]: true })
    setTimeout(() => {
      fetchSlides(direction, () => setSliderState(CLEAR_STATE))
    }, 1000)
  }
}

export function useSliderState(fetchSlides) {
  const [sliderState, setSliderState] = useState(INITIAL_STATE)

  const handleArrowClick = arrowClickHandler(fetchSlides, sliderState, setSliderState)

  return [handleArrowClick, sliderState]
}

export function setPointerEvents(value) {
  document.getElementById('root').style['pointer-events'] = value
}

export function useSliderEffects(sliderState) {
  useEffect(() => {
    const { start, next, prev } = sliderState

    if (start) return

    if (next || prev) {
      setPointerEvents('none')
    } else {
      setPointerEvents('auto')
    }
  }, [sliderState])
}
