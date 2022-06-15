type RpcClient = {
    name: string
    token: string
}

type InitializerFuncResult<Context> = {
    clients: RpcClient[]
    context: Context
}

type ExecutorParams<Context, Params> = {
    client: RpcClient
    context: Context
    params: Params
}

type InitializerFunc<Request, Context> = (request: Request) => Promise<InitializerFuncResult<Context>>
type ExecutorFunc<Context, Params, Result> = ({client, context, params}: ExecutorParams<Context, Params>) => Promise<Result>
type HandlerFuncResult<Request, Response> = (request: Request, response: Response) => Promise<void>

export declare class RpcServer<Request, Response, Context, Params, Result> {
    constructor (initializer: InitializerFunc<Request, Context>)
    handler (executor: ExecutorFunc<Context, Params, Result>): HandlerFuncResult<Request, Response>
    static new<Request, Response, Context, Params, Result>(initializer: InitializerFunc<Request, Context>): RpcServer<Request, Response, Context, Params, Result>
}
