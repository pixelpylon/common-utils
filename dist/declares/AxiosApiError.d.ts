import {ServiceError} from "./ServiceError"
import {AxiosError} from "axios"

export declare class AxiosApiError extends ServiceError {
    constructor (error: AxiosError)
}
