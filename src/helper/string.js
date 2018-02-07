import _ from 'lodash'

export function camelCase(string) {
  return _.capitalize(_.camelCase(string))
}

export function zerofy(number) {
  if (number < 10) {
    return `0${number}`
  }
  return number.toString()
}
