const {get, upperCase} = require("lodash");

const formatAxiosResponse = (axiosResponse) => {
    const method = get(axiosResponse, 'config.method', '[unknown method]')
    const path = get(axiosResponse, 'config.url', '[unknown path]')
    const requestData = get(axiosResponse, 'config.data')
    const status = get(axiosResponse, 'status', '[unknown status]')
    const responseData = get(axiosResponse, 'data')

    return [
        `${upperCase(method)} ${path} ${status}`,
        requestData && `REQUEST: ${JSON.stringify(requestData)}`,
        responseData && `RESPONSE: ${JSON.stringify(responseData)}`,
    ].filter(Boolean).join('\n')
}

module.exports = formatAxiosResponse
