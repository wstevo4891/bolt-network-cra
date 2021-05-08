import { useRef } from 'react'

export function useMouseEventHandlers(mountedRef, setHoverItem) {
  const mouseOutRef = useRef(false)

  const handleMouseLeave = () => {
    mouseOutRef.current = true
    mountedRef.current && setHoverItem(null)
  }

  const handleMouseOver = (event) => {
    const target = event.target.closest('.poster-container')

    mouseOutRef.current = false

    setTimeout(() => {
      if (mouseOutRef.current) return

      const hoverItem = Number(target.dataset.index)

      mountedRef.current && setHoverItem(hoverItem)
    }, 500)
  }

  return [
    handleMouseLeave,
    handleMouseOver,
  ]
}
