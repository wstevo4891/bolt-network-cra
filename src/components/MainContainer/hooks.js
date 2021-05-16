import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

export function useSlideLengthAPI() {
  const slideLength = useSelector(API.slideLength.get)

  const dispatch = useDispatch()

  const setSlideLength = () => {
    dispatch(API.slideLength.set())
  }

  return [slideLength, setSlideLength]
}

export function useSlideLengthManager() {
  const [slideLength, setSlideLength] = useSlideLengthAPI()

  useEffect(() => {
    setSlideLength()

    window.addEventListener('resize', setSlideLength)

    return () => window.removeEventListener('resize', setSlideLength)
  }, [setSlideLength])

  return slideLength
}
