import {AbstractRequestHandler} from "./AbstractRequestHandler"

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
