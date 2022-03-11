type CONFIG_PROPERTY_TYPES_UNION = 'string' | 'int' | 'json' | 'bool'

export declare const CONFIG_PROPERTY_TYPES: {
    readonly STRING: 'string'
    readonly INT: 'int'
    readonly JSON: 'json'
    readonly BOOL: 'bool'
}

export interface IRemoteConfigTemplate {
    [key: string]: any
}

export declare function loadRemoteConfig(
    config: object,
    descriptor: {[key: string]: CONFIG_PROPERTY_TYPES_UNION}
): Promise<IRemoteConfigTemplate>
