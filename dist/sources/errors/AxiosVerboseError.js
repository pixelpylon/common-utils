const {get, upperCase} = require("lodash")
const ServiceError = require("./ServiceError");

const formatErrorMessage = (method, path, requestData, status, responseData, originalMessage) => {
    return [
        `${upperCase(method)} ${path} ${status}`,
        originalMessage,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

class AxiosVerboseError extends ServiceError {
    constructor(error) {
        super({})
        const method = get(error, 'config.method', '[unknown method]')
        const path = get(error, 'config.url', '[unknown path]')
        const requestData = get(error, 'config.data')
        const status = get(error, 'response.status', '[unknown status]')
        const responseData = get(error, 'response.data')
        this.message = formatErrorMessage(method, path, requestData, status, responseData, error.message)
        this.data = responseData
    }
}

module.exports = AxiosVerboseError
