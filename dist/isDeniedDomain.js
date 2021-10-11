const isDeniedDomain = (domain, deniedDomains = []) => {
  const dottedDomain = `.${domain}`;
  for (const deniedDomain of deniedDomains) {
    const dottedDeniedDomain = `.${deniedDomain}`;
    if (dottedDomain.endsWith(dottedDeniedDomain)) {
      return true;
    }
  }

  return false;
};

module.exports = isDeniedDomain;
