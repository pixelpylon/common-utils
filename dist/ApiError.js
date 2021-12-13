const {get, upperCase} = require("lodash");

const formatErrorMessage = (requestMethod, requestPath, requestData, responseStatus, responseData) => {
    return [
        `${upperCase(requestMethod)} ${requestPath} ${responseStatus}`,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

class ApiError extends Error {
    constructor(error) {
        super()
        const requestMethod = get(error, 'config.method', 'UNKNOWN')
        const requestPath = get(error, 'request.path', 'UNKNOWN')
        const requestData = get(error, 'config.data')
        const responseStatus = get(error, 'response.status', 'UNKNOWN')
        const responseData = get(error, 'response.data')
        this.message = formatErrorMessage(requestMethod, requestPath, requestData, responseStatus, responseData)
        this.data = responseData // TODO: check using and remove
        this.responseData = responseData
    }
}

module.exports = ApiError;
