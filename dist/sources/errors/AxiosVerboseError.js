const ServiceError = require("./ServiceError");
// FIX MY NAME
const formatAxiosResponse = require("../formatAxiosRequest");
const {get} = require("lodash");

const formatErrorMessage = (error) => {
    return `${error.message}\n${formatAxiosResponse(error.config, error.response)}`
}

class AxiosVerboseError extends ServiceError {
    constructor(error) {
        super({})
        this.message = formatErrorMessage(error)
        this.data = get(error, 'response.data')
    }
}

module.exports = AxiosVerboseError
