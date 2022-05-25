interface IOptions {
  allowRetry?: (error: any) => boolean,
  maxAttempts?: number
  delayMs?: number
}

export declare function retry<T>(action: () => Promise<T>, options:IOptions): Promise<T>
