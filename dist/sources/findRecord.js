const isArray = require('lodash/isArray')
const isObject = require('lodash/isObject')

const findItem = (items, key, value) => {
  if (!isArray(items)) {
    throw new Error(`Items is not an array`)
  }
  return items.find((item) => item[key] === value)
}

const findRecord = (...args) => {
  if (args.length === 4) {
    const [template, parameter, key, value] = args

    if (!isObject(template)) {
      throw new Error(`Template is not an object`)
    }

    if (template[parameter] === undefined) {
      throw new Error(`Unknown parameter '${parameter}'`)
    }

    return findItem(template[parameter], key, String(value))
  }

  if (args.length === 3) {
    const [items, key, value] = args
    return findItem(items, key, value)
  }

  throw new Error(`Incorrect using of findRecord()`)
}

module.exports = findRecord
