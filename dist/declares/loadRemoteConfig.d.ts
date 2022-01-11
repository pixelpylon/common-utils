export type CONFIG_PROPERTY_TYPES_UNION = 'string' | 'int' | 'json' | 'bool'
export type CONFIG_PROPERTY_NAMES_UNION = 'STRING' | 'INT' | 'JSON' | 'BOOL'
export declare const CONFIG_PROPERTY_TYPES: {[key in CONFIG_PROPERTY_NAMES_UNION]: CONFIG_PROPERTY_TYPES_UNION}
export declare function loadRemoteConfig(config: object, descriptor: {[key: string]: CONFIG_PROPERTY_TYPES_UNION})
