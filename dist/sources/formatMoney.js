const getCurrencySymbol = require('./getCurrencySymbol')

const formatMoney = (cents, currency, withCents) => {
  const formattedValue = withCents ? (cents / 100).toFixed(2) : cents / 100
  return currency ? `${getCurrencySymbol(currency)}${formattedValue}` : formattedValue
}

module.exports = formatMoney
