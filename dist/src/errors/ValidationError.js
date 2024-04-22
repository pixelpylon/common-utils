const {ServiceError} = require('./ServiceError')

class ValidationError extends ServiceError {
  constructor(path, value, message) {
    super(`${path}: '${JSON.stringify(value)}' (${typeof value}) ${message}`, 400)
  }
}

module.exports = {ValidationError}
