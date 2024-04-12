const ServiceError = require('./ServiceError')
const formatAxiosRequest = require('../formatAxiosRequest')
const get = require('lodash/get')

const formatErrorMessage = (error) => {
  return `${error.message}\n${formatAxiosRequest(error.config, error.response)}`
}

class AxiosVerboseError extends ServiceError {
  constructor(error) {
    super({})
    this.message = formatErrorMessage(error)
    this.data = get(error, 'response.data')
    this.code = get(error, 'response.status')
  }
}

module.exports = AxiosVerboseError
