import { useEffect } from 'react'

export function useScrollListeners(navbarRef) {
  const addShadow = () => navbarRef.current.classList.add('nav-shadow')

  const removeShadow = () => navbarRef.current.classList.remove('nav-shadow')

  const handleScroll = () => {
    if (window.scrollY > 20) {
      addShadow()
    } else {
      removeShadow()
    }
  }

  const toggleScrollListener = () => {
    if (window.innerWidth < 768) {
      addShadow()
      window.removeEventListener('scroll', handleScroll)
  
    } else {
      removeShadow()
      window.addEventListener('scroll', handleScroll)
    }
  }

  return [handleScroll, toggleScrollListener]
}

export function useScrollShadowEffect(navbarRef) {
  const [handleScroll, toggleScrollListener] = useScrollListeners(navbarRef)

  useEffect(() => {
    toggleScrollListener()

    window.addEventListener('resize', toggleScrollListener)

    return () => {
      window.removeEventListener('resize', toggleScrollListener)
      window.removeEventListener('scroll', handleScroll)
    }
  })
}
