import {Validator} from "./validate";

type CONFIG_PROPERTY_TYPES_UNION = 'string' | 'int' | 'json' | 'bool'

export declare const CONFIG_PROPERTY_TYPES: {
    readonly STRING: 'string'
    readonly INT: 'int'
    readonly JSON: 'json'
    readonly BOOL: 'bool'
}

export type ExtendedPropertyDescriptor = {
    type: CONFIG_PROPERTY_TYPES_UNION
    validator: Validator
}

export type PropertyDescriptor = CONFIG_PROPERTY_TYPES_UNION | ExtendedPropertyDescriptor

export interface IRemoteConfigTemplate {
    [key: string]: any
}

export declare function loadRemoteConfig(
    config: object,
    descriptor: {[key: string]: PropertyDescriptor}
): Promise<IRemoteConfigTemplate>
