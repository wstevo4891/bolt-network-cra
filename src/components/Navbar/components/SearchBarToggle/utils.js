import { useEffect } from 'react'

import { BREAKPOINT_768 } from 'utils'

export const MIN_WIDTH = 0

export const MAX_WIDTH = '270px'

export const toggleWrapperStyle = (display) => ({
  display: display ? 'flex' : 'none',
  width: display ? MAX_WIDTH : MIN_WIDTH,
})

export function targetIsSearchBar(target) {
  const container = target.closest('.search_bar_toggle')

  if (container === null) return false

  return true
}

export function useEventListeners(setDisplay, setWidth) {
  const handleMouseUp = (event) => {
    if (targetIsSearchBar(event.target)) return
  
    setWidth(MIN_WIDTH)
    setTimeout(() => setDisplay(false), 400)
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
