import { format } from 'date-fns'

export function currency (n, toFixed) {
  return n && typeof n === 'number'
    ? `$${numberWithCommas(toFixed ? n.toFixed(2) : n)}`
    : n
}

export function numberWithCommas (n) {
  return n && typeof n === 'number'
    ? n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : n
}

export function denominate (n) {
  let denominatedValue = n + ''

  if (n && typeof n === 'number') {
    if (n / 1e9 >= 1) {
      denominatedValue = `${Math.round((n / 1e9) * 100) / 100}B`
    } else if (n / 1e6 >= 1) {
      denominatedValue = `${Math.round((n / 1e6) * 100) / 100}M`
    } else if (n / 1e3 >= 1 && n / 1e3 < 1000) {
      denominatedValue = `${Math.round((n / 1e3) * 100) / 100}K`
    }
  }

  return denominatedValue
}

// replaces - and _ in a string with spaces
export function stripCase (str) {
  return str && typeof str === 'string'
    ? str
      .toLowerCase()
      .replace(/[-_]/g, ' ')
    : str
}

export function denominateCurrency (n) {
  return n && typeof n === 'number'
    ? `$${denominate(n)}`
    : n
}

export function uppercase (str) {
  return str && typeof str === 'string'
    ? str.toUpperCase()
    : str
}

export function titleCase (str) {
  return str && typeof str === 'string'
    ? stripCase(str).split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ')
    : str
}

// Preserves uppercase letters witin words
// ex: McDonalds
export function titleCaseAlt (str) {
  return str && typeof str === 'string'
    ? str.split(' ')
      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(' ')
    : str
}

export function formatDate (dateString) {
  return format(new Date(dateString), 'MM/DD/YY')
}

export function formatTime (dateString) {
  return format(new Date(dateString), 'hh:mm A')
}
