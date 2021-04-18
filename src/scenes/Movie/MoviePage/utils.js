export function displayList(arr) {
  if (arr.length === 1) return arr.join('')

  return arr.join(', ')
}
