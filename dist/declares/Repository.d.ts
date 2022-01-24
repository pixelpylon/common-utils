export declare class Repository {
    constructor (db: object, collectionName: string)
    ref (id: string): object
    set (id: string, data: object): Promise<void>
    update (id: string, data: object): Promise<void>
    one (id: string): Promise<object | null>
    list (getQuery: (ref: object) => object): Promise<object[]>
    first (getQuery: (ref: object) => object): Promise<object | null>
}
