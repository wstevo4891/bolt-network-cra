import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { BREAKPOINT_800 } from 'utils'

import { MIN_WIDTH } from './constants'

const SEARCH_CLASSES = [
  '.mobile_nav',
  '.search_bar_toggle',
  '.suggestions_list',
]

export function targetInvalid(target) {
  const elements = []

  SEARCH_CLASSES.forEach((className) => {
    elements.push(target.closest(className))
  })

  const result = elements.reduce((memo, item) => memo + item)

  return result === 0 ? false : true
}

export function mouseUpHandler(setDisplay, setWidth, search) {
  return (event) => {
    if (window.innerWidth < BREAKPOINT_800 || search.length > 0) return

    const invalidTarget = targetInvalid(event.target)

    if (invalidTarget) return
  
    setWidth(MIN_WIDTH)
    setTimeout(() => setDisplay(false), 400)
  }
}

export function resizeHandler(setDisplay, setWidth) {
  return () => {
    const { innerWidth } = window

    if (innerWidth < BREAKPOINT_800) {
      setDisplay(true)
      setWidth('auto')
    } else if (innerWidth >= BREAKPOINT_800) {
      setDisplay(false)
      setWidth(MIN_WIDTH)
    }
  }
}

export function useEventListeners(setDisplay, setWidth) {
  const { search } = useLocation()

  const handleMouseUp = mouseUpHandler(setDisplay, setWidth, search)

  const handleResize = resizeHandler(setDisplay, setWidth)

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)
  
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
    }
  })
}
