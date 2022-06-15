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

type InitializerFunc = (request: object) => Promise<IInitializerFuncResult>
type ExecutorFunc = ({client, context, params}: IExecutorParams) => Promise<object>
type HandlerFuncResult = (request: object, response: object) => Promise<void>

export declare class RpcServer {
    constructor (initializer: InitializerFunc)
    handler (executor: ExecutorFunc): HandlerFuncResult
    static new (initializer: InitializerFunc): RpcServer
}
