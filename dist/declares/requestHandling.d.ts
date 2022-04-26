export abstract class AbstractRequestHandler<TRequest, TResponse, TContext, TInput, TResult, TError> {
  private _context?: TContext

  public constructor(request: TRequest, response: TResponse)

  protected get context(): TContext

  initializeContext(): Promise<void>

  handle(): Promise<void>

  abstract getInput(): TInput

  abstract validateInput(input: TInput): void

  abstract createContext(): Promise<TContext>

  abstract getResult(input: TInput): Promise<TResult>

  abstract sendResult(result: TResult): void

  abstract sendError(error: TError): Promise<void>
}

export const handleRequest: <Request, Response, Handler extends AbstractRequestHandler<Request, Response, any, any, any, any>>
(HandlerConstructor: new(request: Request, response: Response) => Handler) =>
  (request: Request, response: Response) => Promise<void>
