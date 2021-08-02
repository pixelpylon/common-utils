const verboseErrorMessage = require("./verboseErrorMessage");

const DEFAULT_SERVICE = 'default';

class ServiceError extends Error {
  constructor(messageOrError, service = DEFAULT_SERVICE, fieldPath) {
    const error = typeof messageOrError === 'string'
      ? new Error(messageOrError)
      : messageOrError;

    super(verboseErrorMessage(service, error, fieldPath));
    this.service = service;
  }
}

module.exports = ServiceError;
