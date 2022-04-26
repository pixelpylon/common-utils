export abstract class RequestHandler<TRequest, TResponse, TContext, TInput, TResult, TError> {
  private _context?: TContext

  protected constructor(
        protected readonly request: TRequest,
        protected readonly response: TResponse,
  ) {}

  protected get context(): TContext {
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
      return this.sendResult(result)
    } catch (error: any) {
      return this.sendError(error)
    }
  }

  abstract getInput(): TInput

  abstract validateInput(input: TInput): void

  abstract createContext(): Promise<TContext>

  abstract getResult(input: TInput): Promise<TResult>

  abstract sendResult(result: TResult): void

  abstract sendError(error: TError): Promise<void>
}
