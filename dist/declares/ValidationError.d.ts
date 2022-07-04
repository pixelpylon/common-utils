import {ServiceError} from "./ServiceError"

export declare class ValidationError extends ServiceError {
    constructor (path: string, value: any, message: string)
}
