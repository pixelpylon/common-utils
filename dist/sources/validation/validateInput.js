function validateInput(validator) {
  return function (req, res, next) {
    const input = {
      ...req.query,
      ...req.body,
      ...req.params,
    }

    try {
      validator('input', input)
      return next()
    } catch (error) {
      error.message = `${req.method} ${req.url}: ${error.message}`
      console.error(error)
      return res.status(500).json({error: 'Internal server error'})
    }
  }
}

module.exports = validateInput
