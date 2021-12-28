export declare class RpcClient {
    constructor (url: string)
    call (method: string, params: object): Promise<object>
    static new (url: string): RpcClient
}
