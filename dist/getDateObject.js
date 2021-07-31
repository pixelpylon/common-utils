const getDateObject = (at) => {
  const date = at || new Date();
  return {
    humanReadableDate: date.toISOString(),
    timestamp: date.getTime(),
  };
};

module.exports = getDateObject;
