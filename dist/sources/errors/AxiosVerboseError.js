const ServiceError = require("./ServiceError");
const formatAxiosResponse = require("../formatAxiosResponse");
const {get} = require("lodash");

const formatErrorMessage = (error) => {
    return `${error.message}\n${formatAxiosResponse(error.response)}`
}

class AxiosVerboseError extends ServiceError {
    constructor(error) {
        super({})
        this.message = formatErrorMessage(error)
        this.data = get(error, 'response.data')
    }
}

module.exports = AxiosVerboseError
