const isCorrectEmailAddress = (email) => {
  if (!email) {
    return false;
  }
  const parts = email.split('@');
  return parts.length === 2;
};

module.exports = isCorrectEmailAddress;
