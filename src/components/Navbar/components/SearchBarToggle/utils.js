import { useEffect } from 'react'

import { MIN_WIDTH, SEARCH_CLASSES } from './constants'

import { BREAKPOINT_768 } from 'utils'

export function targetIsSearchBar(event) {
  return SEARCH_CLASSES.includes(event.target.className)
}

export function useEventListeners(setDisplay, setWidth) {
  const handleMouseUp = (event) => {
    if (targetIsSearchBar(event)) return
  
    setWidth(MIN_WIDTH)
    setTimeout(setDisplay(false), 400)
  }

  const handleResize = () => {
    if (window.innerWidth < BREAKPOINT_768) {
      setWidth('auto')
    } else if (window.innerWidth >= BREAKPOINT_768) {
      setWidth(MIN_WIDTH)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)
  
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
    }
  })
}
