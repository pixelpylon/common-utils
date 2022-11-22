export declare class Repository<T, Query, DocumentReference> {
    constructor (db: object, collectionName: string)
    ref (id: string): DocumentReference
    set(id: string, data: T): Promise<void>
    update(id: string, data: Partial<T>): Promise<void>

    one(id: string): Promise<T | null>
    list(getQuery: (ref: object) => Query): Promise<T[]>
    first(getQuery: (ref: object) => Query): Promise<T | null>

    unsafe(): {
        one(id: string): Promise<T>
        list(getQuery: (ref: object) => Query): Promise<T[]>
        first(getQuery: (ref: object) => Query): Promise<T>
    }
}
