import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios"

export interface IAxiosApiClient {
    instance: AxiosInstance
    get<T = unknown, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    delete<T = unknown, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>
    post<T = unknown, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    put<T = unknown, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
    patch<T = unknown, R = AxiosResponse<T>, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>
}

export declare function AxiosApiClient (axiosInstance: AxiosInstance): IAxiosApiClient
