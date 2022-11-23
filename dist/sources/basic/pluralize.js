const pluralize = (count, noun, suffix = 's') => {
    return `${noun}${count !== 1 ? suffix : ''}`
}

module.exports = pluralize
