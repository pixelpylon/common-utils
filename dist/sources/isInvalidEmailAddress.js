const isDeniedDomain = require('./isDeniedDomain')
const isCorrectEmailAddress = require('./isCorrectEmailAddress')

const isInvalidEmailAddress = (email, deniedDomains) => {
  if (!isCorrectEmailAddress(email)) {
    return `Incorrect email format '${email}'`
  }

  const domain = email.split('@')[1]

  if (isDeniedDomain(domain, deniedDomains)) {
    return `Domain '${domain}' is denied`
  }

  return ''
}

module.exports = isInvalidEmailAddress
