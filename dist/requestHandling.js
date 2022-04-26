class AbstractRequestHandler {
  constructor(request, response) {
    this.request = request
    this.response = response
  }

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
      this.sendResult(result)
    } catch (error) {
      this.sendError(error)
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

  sendResult(result) {
    throw new Error(`Not implemented abstract method sendResult()`)
  }

  sendError(error) {
    throw new Error(`Not implemented abstract method sendError()`)
  }
}

const handleRequest = (HandlerConstructor) => {
  return async (request, response) => {
    const handler = new HandlerConstructor(request, response)
    await handler.handle()
  }
}

module.exports = {
  AbstractRequestHandler,
  handleRequest,
}
