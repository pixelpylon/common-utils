const parsePhone = (phoneSource) => {
  const result = phoneSource.match(/^\w*\+[\s\d()-]+$/);

  if (!result) {
    return null;
  }

  return result[0].replace(/[^\d+]/ig, '');
};

module.exports = parsePhone;
