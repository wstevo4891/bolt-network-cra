import { useEffect, useRef } from 'react'

export function mouseOverHandler(mountedRef, mouseOutRef, setHoverItem) {
  return (event) => {
    const target = event.target.closest('.poster-container')

    mouseOutRef.current = false

    setTimeout(() => {
      if (mouseOutRef.current) return

      const hoverItem = Number(target.dataset.index)

      mountedRef.current && setHoverItem(hoverItem)
    }, 500)
  }
}

export function useMouseEventHandlers(setHoverItem) {
  const mountedRef = useRef(false)
  const mouseOutRef = useRef(false)

  useEffect(() => {
    mountedRef.current = true
    return () => { mountedRef.current = false }
  }, [])

  const handleMouseLeave = () => {
    mouseOutRef.current = true
    mountedRef.current && setHoverItem(null)
  }

  const handleMouseOver = mouseOverHandler(mountedRef, mouseOutRef, setHoverItem)

  return [
    handleMouseLeave,
    handleMouseOver,
  ]
}
