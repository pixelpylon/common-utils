import {ServiceError} from "./ServiceError"

export declare class ValidationError extends ServiceError {
    constructor (value: any, message: string, path?: string)
}
