import { AxiosResponse } from "axios";

import { PrivacyApi } from "..";

export abstract class Endpoint {
    /** HTTP method used in the request */
    method: string;
    /** Path of the request, appended to the baseUrl */
    path: string;
    /** Parameters serialized with the request */
    params: object;

    public beforeExecute?(manager: PrivacyApi): void;
}

export type Response<T> = AxiosResponse<T>;
