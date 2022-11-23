type Code = string | number

interface IConstructorParams {
    message: string
    service?: string
    code?: Code
    data?: object
    payload?: object
}

interface IWithParams {
    message?: string
    service?: string
    code?: Code
    data?: object
    payload?: object
}

export declare class ServiceError extends Error {
    public readonly message: string
    public readonly service: string
    public readonly code: Code
    public readonly data: object
    public readonly payload: object

    constructor (message: string, code?: Code)
    constructor ({message, service, code, data, payload}: IConstructorParams)

    with ({message, service, code, data, payload}: IWithParams): ServiceError
    withService (service: string): ServiceError
    withCode (code: Code): ServiceError
}
