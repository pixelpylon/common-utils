const moment = require("moment")

const parseDateRange = (source) => {
  const parts = source.split(':')

  if (parts.length !== 2) {
    throw new Error(`Incorrect date range '${source}'`)
  }

  const dates = parts.map((part) => {
    const date = moment(part, 'YYYY-MM-DD')

    if (!date.isValid()) {
      throw new Error(`Incorrect date '${part}'`)
    }
  })

  const [start, end] = dates
  return {start, end}
}

const parseDateRanges = (source) => {
  return source
      ? source.split(',').map(parseDateRange)
      : []
}

const isDateInDateRanges = (date, source) => {
  const ranges = parseDateRanges(source)
  return ranges.some((range) => moment(date).isBetween(range.start, range.end))
}

module.exports = {
  parseDateRanges,
  isDateInDateRanges,
};
