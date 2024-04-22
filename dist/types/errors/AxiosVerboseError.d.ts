import {ServiceError} from './ServiceError'

type AxiosError = {
  isAxiosError: true
}

export declare class AxiosVerboseError extends ServiceError {
  constructor(error: AxiosError)
}
