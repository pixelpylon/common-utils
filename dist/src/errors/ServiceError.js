const normalizeArgs = (args) => {
  if (args.length === 0 || args.length > 2) {
    throw new Error('Incorrect ServiceError usage')
  }

  if (args.length === 2) {
    const [message, code] = args
    return {
      message,
      code,
    }
  }

  if (typeof args[0] === 'string') {
    return {
      message: args[0],
    }
  }

  const {message, service, code, data, payload, cause} = args[0]
  return {message, service, code, data, payload, cause}
}

class ServiceError extends Error {
  constructor(...args) {
    super()

    const {message, service, code, data, payload, cause} = normalizeArgs(args)
    this.isServiceError = true
    this.message = message
    this.service = service || 'default'
    this.code = code || 'common'
    this.data = data
    this.payload = payload

    if (cause) {
      this.cause = cause
    }
  }

  with({message, service, code, data, payload, cause}) {
    return new ServiceError({
      message: message === undefined ? this.message : message,
      code: code === undefined ? this.code : code,
      data: data === undefined ? this.data : data,
      payload: payload === undefined ? this.payload : payload,
      service: service === undefined ? this.service : service,
      cause: cause === undefined ? this.cause : cause,
    })
  }

  withService(service) {
    return this.with({service})
  }

  withCode(code) {
    return this.with({code})
  }
}

module.exports = {ServiceError}
