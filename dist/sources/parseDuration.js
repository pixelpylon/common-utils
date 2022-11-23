const originalParseDuration = require('parse-duration')
const ServiceError = require("./errors/ServiceError");

const parseDuration = (source) => {
    const result = originalParseDuration(source)

    if (result === null) {
        throw new ServiceError(`Incorrect duration '${source}'`)
    }

    return result
}

module.exports = {
    parseDuration,
}
