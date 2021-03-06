const ServiceError = require("./ServiceError")

class ValidationError extends ServiceError {
    constructor(path, value, message) {
        super(`${path}: '${JSON.stringify(value)}' ${message}`)
    }
}

module.exports = ValidationError
