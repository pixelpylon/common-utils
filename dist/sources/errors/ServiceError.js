const verboseErrorMessage = require("./verboseErrorMessage")

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

    const {message, service, code, data, payload} = args[0]
    return {message, service, code, data, payload}
}

class ServiceError extends Error {
    constructor(...args) {
        super()

        const {message, service, code, data, payload} = normalizeArgs(args)

        this.message = message
        this.service = service || 'default'
        this.code = code || 'common'
        this.data = data
        this.payload = payload
    }

    with ({message, service, code, data, payload}) {
        return new ServiceError({
            message: message === undefined ? this.message : message,
            code: code === undefined ? this.code : code,
            data: data === undefined ? this.data : data,
            payload: payload === undefined ? this.payload : payload,
            service: service === undefined ? this.service : service,
        })
    }

    withService (service) {
        return this.with({service})
    }

    withCode (code) {
        return this.with({code})
    }
}

module.exports = ServiceError
