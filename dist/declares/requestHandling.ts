export abstract class AbstractRequestHandler<TRequest, TResponse, TContext, TInput, TResult, TError> {
  private _context?: TContext

  // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
  public constructor(
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

export const handleRequest =
  <Request, Response, Handler extends AbstractRequestHandler<Request, Response, any, any, any, any>>
  (
    HandlerConstructor: new(request: Request, response: Response) => Handler
  ) => {
    return async (request: Request, response: Response) => {
      const handler = new HandlerConstructor(request, response)
      await handler.handle()
    }
  }
