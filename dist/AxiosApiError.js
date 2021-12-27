const {get, upperCase} = require("lodash")
const ServiceError = require("./ServiceError")

const formatErrorMessage = (method, path, requestData, status, responseData) => {
    return [
        `${upperCase(method)} ${path} ${status}`,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

class AxiosApiError extends ServiceError {
    constructor(error) {
        super({})
        const method = get(error, 'config.method', 'UNKNOWN')
        const path = get(error, 'request.path', 'UNKNOWN')
        const requestData = get(error, 'config.data')
        const status = get(error, 'response.status', 'UNKNOWN')
        const responseData = get(error, 'response.data')
        this.message = formatErrorMessage(method, path, requestData, status, responseData)
        this.data = responseData
    }
}

module.exports = AxiosApiError
