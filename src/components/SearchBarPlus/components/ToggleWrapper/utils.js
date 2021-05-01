import { useEffect } from 'react'

import { BREAKPOINT_768 } from 'utils'

import { MIN_WIDTH } from './constants'

export function targetIsSearchBar(target) {
  const container = target.closest('.search_bar_toggle')

  if (container === null) return false

  return true
}

export function mouseUpHandler(setDisplay, setWidth) {
  return (event) => {
    if (targetIsSearchBar(event.target)) return
  
    setWidth(MIN_WIDTH)
    setTimeout(() => setDisplay(false), 400)
  }
}

export function resizeHandler(setWidth) {
  return () => {
    const { innerWidth } = window

    if (innerWidth < BREAKPOINT_768) {
      setWidth('auto')
    } else if (innerWidth >= BREAKPOINT_768) {
      setWidth(MIN_WIDTH)
    }
  }
}

export function useEventListeners(setDisplay, setWidth) {
  const handleMouseUp = mouseUpHandler(setDisplay, setWidth)

  const handleResize = resizeHandler(setWidth)

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)
  
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
    }
  })
}
