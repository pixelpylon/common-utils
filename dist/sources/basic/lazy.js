function lazy(loader) {
  return {
    async lazy() {
      if (this.value === undefined) {
        this.value = await loader()
        return this.value
      }

      return this.value
    },

    get() {
      return this.value
    },
  }
}

module.exports = lazy
