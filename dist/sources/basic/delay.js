const delay = (durationMs) => {
  return new Promise((resolve) => setTimeout(resolve, durationMs))
}

module.exports = delay
