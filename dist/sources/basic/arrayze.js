function arrayze(value) {
  return value === undefined || Array.isArray(value) ? value : [value]
}

module.exports = arrayze
