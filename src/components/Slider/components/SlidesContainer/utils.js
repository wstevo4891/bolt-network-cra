const TRANSFORMATIONS = {
  2: -150,
  3: -133.33333333333334,
  4: -125,
  5: -120,
  6: -116.66666666666667
}

export function translate3D(translateX = 0) {
  return { transform: `translate3d(${translateX}%, 0px, 0px)` }
}

export function transformStyle(params) {
  const translateX = TRANSFORMATIONS[params.slideLength]

  if (params.next) {
    return translate3D(translateX - 100)

  } else if (params.prev) {
    return translate3D(translateX + 100)

  } else return translate3D(translateX)
}

export function translateFactory(params) {
  if (params.start) {
    if (params.next) return translate3D(-100)

    return translate3D()
  }

  return transformStyle(params)
}
