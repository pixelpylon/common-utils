const getCurrencySymbol = require("./getCurrencySymbol")

const formatMoney = (cents, currency) => {
    const formattedValue = cents / 100
    return currency
        ? `${getCurrencySymbol(currency)}${formattedValue}`
        : formattedValue
}

module.exports = formatMoney
