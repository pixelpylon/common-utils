const isDeniedDomain = (domain, deniedDomains = []) => {
  if (!Array.isArray(deniedDomains)) {
    throw new Error(`Incorrect denied domains '${JSON.stringify(deniedDomains)}', type '${typeof deniedDomains}'`)
  }

  const dottedDomain = `.${domain}`
  for (const deniedDomain of deniedDomains) {
    const dottedDeniedDomain = `.${deniedDomain}`
    if (dottedDomain.endsWith(dottedDeniedDomain)) {
      return true
    }
  }

  return false
}

module.exports = isDeniedDomain
