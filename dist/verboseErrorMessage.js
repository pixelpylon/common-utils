const {get} = require('lodash');

const verboseErrorMessage = (service, error, fieldPath = 'response.body') => {
  const body = get(error, fieldPath);
  const formattedBody = body ? JSON.stringify(body, null, 2) : null;
  const secondRow = formattedBody ? `\n${formattedBody}` : '';
  const firstRow = `${service}: ${error.message}`;
  return `${firstRow}${secondRow}`;
};

module.exports = verboseErrorMessage;
