export declare class RpcClient {
    constructor (url: string)
    call (method: string, params: any): Promise<any>
    static new (url: string): RpcClient
}
