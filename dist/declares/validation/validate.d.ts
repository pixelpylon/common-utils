// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Validator = (path: string, value: any) => void

export type ValidatorDescriptor = {[prop: string]: Validator}

export declare function every(...validators: Validator[]): Validator
export declare function some(...validators: Validator[]): Validator
export declare function props(descriptor: ValidatorDescriptor): Validator
export declare function keys(validator: Validator): Validator
export declare function values(validator: Validator): Validator
export declare function items(validator: Validator): Validator
export declare const isInt: Validator
export declare const isNumber: Validator
export declare const isBoolean: Validator
export declare const isIntString: Validator
export declare const isString: Validator
export declare function isFormat(format: RegExp): Validator
export declare const isUuid: Validator
export declare const isEmail: Validator
export declare const isPhone: Validator
export declare const isUrl: Validator
export declare const isDefined: Validator
export declare const isUndefined: Validator
export declare const isNull: Validator
export declare const isFilled: Validator
export declare const isBlank: Validator
export declare const isObject: Validator
export declare const isArray: Validator
export declare const isValid: Validator
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare function isEqual(value: any): Validator
export declare const isDateRanges: Validator
export declare const isDuration: Validator
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare function isIn(list: any[]): Validator
export declare function optional(validator: Validator): Validator
