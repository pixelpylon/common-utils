const isCorrectEmailAddress = (email) => {
  if (!email) {
    return false
  }
  return email.match(/[^@]+@([^@.]+\.)+[^@.]+/)
}

module.exports = isCorrectEmailAddress
