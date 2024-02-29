import { AxiosRequestConfig } from 'axios';
export declare type CommonResult = {
    success: Boolean;
    code: Number;
    message: string;
    data: any;
};
export declare type RequestFunc = (API: string, params?: any) => Promise<any>;
export declare type RequestBodyFunc = (API: string, params?: any, config?: AxiosRequestConfig) => Promise<any>;
export interface HttpMethod {
    get: RequestFunc;
    post: RequestBodyFunc;
    put: RequestBodyFunc;
    patch: RequestBodyFunc;
    delete: RequestFunc;
}
declare const httpMethod: HttpMethod;
export { httpMethod };
