import { renderHook, act } from '@testing-library/react-hooks'
import { useDispatch, useSelector } from 'react-redux'

import { API } from 'store'

import { useSlideLengthAPI, useSlideLengthManager } from '../hooks'

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}))

jest.mock('store/API', () => ({
  slideLength: {
    get: jest.fn((state) => state.slideLength.value),
    set: jest.fn(),
  },
}))

const SLIDE_LENGTH_STATE = {
  slideLength: {
    value: 6,
  },
}

describe('MainContainer/hooks', () => {
  const mockSlideLengthState = (state) => {
    useSelector.mockImplementation((selector) => selector(state))
  }

  // beforeEach(() => {
  //   useSelector.mockImplementation((selector) => selector(SLIDE_LENGTH_STATE))[o]
  // })

  describe('#useSlideLengthAPI', () => {
    let slideLength, setSlideLength

    beforeEach(() => {
      mockSlideLengthState(SLIDE_LENGTH_STATE)
    })

    describe("slideLength", () => {
      it('should return value in state', () => {
        mockSlideLengthState(SLIDE_LENGTH_STATE)

        const { result } = renderHook(() => useSlideLengthAPI())

        const slideLength = result.current[0]

        expect(slideLength).toEqual(6)
      })
    })
  })

  describe('#useSlideLengthManager', () => {})
})
