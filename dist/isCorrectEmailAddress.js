const isCorrectEmailAddress = (email) => {
  const parts = email.split('@');
  return parts.length === 2;
};

module.exports = isCorrectEmailAddress;
