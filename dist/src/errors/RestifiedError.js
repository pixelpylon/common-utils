const {ServiceError} = require('./ServiceError')

class RestifiedError extends ServiceError {
  constructor(message, code = 500) {
    super(message, code)
  }
}

module.exports = {RestifiedError}
