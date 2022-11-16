class AbstractRequestHandler {
  constructor() {}

  get context() {
    if (!this._context) {
      throw new Error("Handler context isn't initialized")
    }

    return this._context
  }

  async initializeContext() {
    this._context = await this.createContext()
  }

  async handle() {
    try {
      await this.initializeContext()
      const input = this.getInput()
      this.validateInput(input)
      const result = await this.getResult(input)
      await this.onResult(result)
      return result
    } catch (error) {
      await this.onError(error)
    }
  }

  getInput() {
    throw new Error(`Not implemented abstract method getInput()`)
  }

  validateInput(input) {
    throw new Error(`Not implemented abstract method validateInput()`)
  }

  createContext() {
    throw new Error(`Not implemented abstract method createContext()`)
  }

  getResult(input) {
    throw new Error(`Not implemented abstract method getResult()`)
  }

  onResult(result) {}

  onError(error) {
    throw new Error(`Not implemented abstract method onError()`)
  }
}

const handleRequest = (HandlerConstructor) => {
  return async (...args) => {
    const handler = new HandlerConstructor(...args)
    await handler.handle()
  }
}

module.exports = {
  AbstractRequestHandler,
  handleRequest,
}
