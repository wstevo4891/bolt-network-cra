import { SessionListAPI } from 'services'

import { MY_LIST } from './constants'

export function fetchMyListMovies() {
  const list = SessionListAPI.getList(MY_LIST)

  if (list.length === undefined) return []

  return Object.values(list)
}
