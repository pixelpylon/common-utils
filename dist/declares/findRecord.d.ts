type Value = string | number | boolean

export declare function findRecord<T>(template: {[key: string]: any}, parameter: string, key: string, value: Value): T
export declare function findRecord<T>(items: T[], key: string, value: Value): T
