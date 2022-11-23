import {ServiceError} from "./ServiceError"

export declare class RestifiedError extends ServiceError {
    constructor (message: string, code?: number)
}
