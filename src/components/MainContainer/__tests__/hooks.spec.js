import { renderHook, act } from '@testing-library/react-hooks'
import { useSlideLengthAPI, useSlideLengthManager } from '../hooks'

describe('MainContainer/hooks', () => {
  describe('#useSlideLengthAPI', () => {
    it('foo', () => {
      const { result } = renderHook(() => useSlideLengthAPI())

      console.log(result.current)

      expect(true).toBe(true)
    })
  })

  describe('#useSlideLengthManager', () => {})
})
