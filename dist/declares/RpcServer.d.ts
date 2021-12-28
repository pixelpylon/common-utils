interface IRpcClient {
    name: string
    token: string
}

interface IInitializerFuncResult {
    clients: IRpcClient[]
    context: any
}

interface IExecutorParams {
    client: IRpcClient
    context: any
    params: any
}

type InitializerFunc = () => Promise<IInitializerFuncResult>
type ExecutorFunc = ({client, context, params}: IExecutorParams) => Promise<any>
type HandlerFuncResult = (request: any, response: any) => Promise<void>

export declare class RpcServer {
    constructor (initializer: InitializerFunc)
    handler (executor: ExecutorFunc): HandlerFuncResult
    static new (initializer: InitializerFunc): RpcServer
}
