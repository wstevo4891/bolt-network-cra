import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

export function useAPI() {
  const dispatch = useDispatch()

  return () => {
    dispatch(API.slideLength.set())
  }
}

export function useSlideLengthManager() {
  const slideLength = useSelector(API.slideLength.get)

  const setSlideLength = useAPI()

  useEffect(() => {
    setSlideLength()

    window.addEventListener('resize', setSlideLength)

    return () => window.removeEventListener('resize', setSlideLength)
  }, [setSlideLength])

  return slideLength
}
