type Options = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  allowRetry?: (error: any) => boolean
  maxAttempts?: number
  delayMs?: number
}

export declare function retry<T>(action: () => Promise<T>, options?: Options): Promise<T>
