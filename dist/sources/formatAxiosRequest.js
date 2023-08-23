const {get} = require("lodash/get");
const {upperCase} = require("lodash/upperCase");

const formatAxiosRequest = (config, response) => {
    const method = get(config, 'method', '[unknown method]')
    const path = get(config, 'url', '[unknown path]')
    const requestData = get(config, 'data')
    const status = get(response, 'status', '[unknown status]')
    const responseData = get(response, 'data')

    return [
        `${upperCase(method)} ${path} ${status}`,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

module.exports = formatAxiosRequest
