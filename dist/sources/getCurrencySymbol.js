const getCurrencySymbol = (currency) => {
  switch (currency) {
    case 'EUR':
      return '€'
    case 'USD':
      return '$'
    default:
      return currency
  }
}

module.exports = getCurrencySymbol
