
export const sortByObjKey = function (key) {
  return function (a, b) {
    const textA = (typeof a[key] === 'string') ? a[key].toLowerCase() : a[key]
    const textB = (typeof b[key] === 'string') ? b[key].toLowerCase() : b[key]
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
  }
}

export const sortByDate = function (dir) {
  return function (a, b) {
    return (dir === 'asc') ? a - b : b - a
  }
}

export const sortBystring = function (a, b) {
  const textA = a.toLowerCase()
  const textB = b.toLowerCase()

  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
}

export const sortByOrder = function (order) {
  const flippedArr = order
    .map(i => i.toLowerCase())
    .reverse() // We flip this to make the first item has the highest index and thus gets sorted first

  // We end up just sorting on the index of the item in the array
  return function (a, b) {
    const aVal = flippedArr.indexOf(a.toLowerCase())
    const bVal = flippedArr.indexOf(b.toLowerCase())

    return (aVal > bVal) ? -1 : (aVal < bVal) ? 1 : 0
  }
}
