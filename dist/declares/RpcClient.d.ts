export declare class RpcClient {
    constructor (url: string)
    safeCall<D=any, E=any>(method: string, params?: object): Promise<{date?: D, error?: E}>
    unsafeCall<D=any>(method: string, params?: object): Promise<D>
    static new (url: string): RpcClient
}
