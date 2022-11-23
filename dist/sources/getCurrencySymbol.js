const getCurrencySymbol = (currency) => {
    switch (currency) {
        case "eur": return "€"
        case "usd": return "$"
        default: return currency
    }
}

module.exports = getCurrencySymbol;
