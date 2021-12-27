interface IConstructorParams {
    message: string
    service?: string
    code?: string | number
    data?: any
    payload?: any
}

interface IWithParams {
    message?: string
    service?: string
    code?: string | number
    data?: any
    payload?: any
}

export declare class ServiceError extends Error {
    public readonly message
    public readonly service
    public readonly code
    public readonly data
    public readonly payload

    constructor (message: string, code?: string)
    constructor ({message, service, code, data, payload}: IConstructorParams)

    with ({message, service, code, data, payload}: IWithParams): ServiceError
    withService (service: string): ServiceError
    withCode (code: string): ServiceError
}
