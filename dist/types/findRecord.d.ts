type Value = string | number | boolean

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export declare function findRecord<T>(template: {[key: string]: any}, parameter: string, key: string, value: Value): T
export declare function findRecord<T>(items: T[], key: string, value: Value): T
