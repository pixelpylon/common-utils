import {ServiceError} from './ServiceError'

export declare class ValidationError extends ServiceError {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(path: string, value: any, message: string)
}
