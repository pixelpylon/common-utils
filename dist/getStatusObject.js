const getDateObject = require("./getDateObject");

const getStatusObject = (status, error) => {
  return {
    status,
    error: error || null,
    ...getDateObject(),
  };
};

module.exports = getStatusObject;
