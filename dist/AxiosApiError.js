const {get, upperCase} = require("lodash")
const ServiceError = require("./ServiceError")

const formatErrorMessage = (method, path, requestData, status, responseData, originalMessage) => {
    return [
        `${upperCase(method)} ${path} ${status}`,
        originalMessage,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

class AxiosApiError extends ServiceError {
    constructor(error) {
        super({})
        const method = get(error, 'config.method', 'UNKNOWN')
        const path = get(error, 'config.url', 'UNKNOWN')
        const requestData = get(error, 'config.data')
        const status = get(error, 'response.status', 'UNKNOWN')
        const responseData = get(error, 'response.data')
        this.message = formatErrorMessage(method, path, requestData, status, responseData, error.message)
        this.data = responseData
    }
}

module.exports = AxiosApiError
