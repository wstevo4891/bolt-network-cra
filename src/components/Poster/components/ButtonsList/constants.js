import { STATIC } from 'utils'

const MOVE_DOWN = 'move-down'

const HIDDEN = 'hidden'

export const STATUS_MAP = {
  [null]: {
    volume: STATIC,
    like: STATIC,
    unlike: STATIC,
  },
  [true]: {
    volume: MOVE_DOWN,
    like: MOVE_DOWN,
    unlike: HIDDEN,
  },
  [false]: {
    volume: MOVE_DOWN,
    like: HIDDEN,
    unlike: 'selected',
  },
}