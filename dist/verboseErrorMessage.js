const {get} = require('lodash');

const verboseErrorMessage = (from, error, fieldPath = 'response.body') => {
  const body = get(error, fieldPath);
  const formattedBody = body ? JSON.stringify(body, null, 2) : null;
  const secondRow = formattedBody ? `\n${formattedBody}` : '';
  const firstRow = `${from}: ${error.message}`;
  return `${firstRow}${secondRow}`;
};

module.exports = verboseErrorMessage;
