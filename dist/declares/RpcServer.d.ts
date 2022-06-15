interface IRpcClient {
    name: string
    token: string
}

interface IInitializerFuncResult {
    clients: IRpcClient[]
    context: object
}

interface IExecutorParams {
    client: IRpcClient
    context: object
    params: object
}

type InitializerFunc<Request> = (request: Request) => Promise<IInitializerFuncResult>
type ExecutorFunc = ({client, context, params}: IExecutorParams) => Promise<object>
type HandlerFuncResult<Request, Response> = (request: Request, response: Response) => Promise<void>

export declare class RpcServer<Request, Response> {
    constructor (initializer: InitializerFunc<Request>)
    handler (executor: ExecutorFunc): HandlerFuncResult<Request, Response>
    static new<Request, Response>(initializer: InitializerFunc<Request>): RpcServer<Request, Response>
}
