type Code = string | number

type ConstructorParams = {
  message: string
  service?: string
  code?: Code
  data?: object
  payload?: object
  cause?: object
}

type WithParams = {
  message?: string
  service?: string
  code?: Code
  data?: object
  payload?: object
  cause?: object
}

export declare class ServiceError extends Error {
  public readonly isServiceError: true
  public readonly message: string
  public readonly service: string
  public readonly code: Code
  public readonly data: object
  public readonly payload: object

  constructor(message: string, code?: Code)
  constructor({message, service, code, data, payload, cause}: ConstructorParams)

  with({message, service, code, data, payload, cause}: WithParams): ServiceError
  withService(service: string): ServiceError
  withCode(code: Code): ServiceError
}
