import { NEXT, PREV } from 'utils'

export const PAGE_LIMITS = {
  2: 12,
  3: 8,
  4: 6,
  5: 5,
  6: 4,
}

export function findNextPage(currentPage, direction, slideLength) {
  const page = nextPage(currentPage, direction)
  const limit = PAGE_LIMITS[slideLength]

  if (page > limit) {
    return 1
  } else if (page === 0) {
    return limit
  } else return page
}

export function nextPage(currentPage, direction) {
  if (direction === NEXT) {
    return currentPage + 1
  } else if (direction === PREV) {
    return currentPage - 1
  } else return currentPage
}