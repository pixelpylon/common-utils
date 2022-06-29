export type Validator<T=any> = (path: string, value: T) => void

export type ValidatorDescriptor = {[prop: string]: Validator}

export declare function every<T>(...validators: Validator[]): Validator<T>
export declare function some<T>(...validators: Validator[]): Validator<T>
export declare function props<T>(descriptor: ValidatorDescriptor): Validator<T>
export declare function keys<T>(validator: Validator): Validator<T>
export declare function values<T>(validator: Validator): Validator<T>
export declare function items<T>(validator: Validator): Validator<T>
export declare const isInt: Validator<number>
export declare const isBoolean: Validator<boolean>
export declare const isIntString: Validator<string>
export declare const isString: Validator<string>
export declare function isFormat(format: RegExp): Validator<string>
export declare const isUuid: Validator<string>
export declare const isEmail: Validator<string>
export declare const isUrl: Validator<string>
export declare const isDefined: Validator
export declare const isUndefined: Validator
export declare const isNull: Validator
export declare const isFilled: Validator<string>
export declare const isBlank: Validator<string>
export declare const isObject: Validator<Object>
export declare const isArray: Validator
export declare const isValid: Validator
export declare const isDateRanges: Validator<string>
export declare const isDuration: Validator<string>
export declare function isIn(list: any[]): Validator
export declare function optional<T>(validator: Validator): Validator<T>
