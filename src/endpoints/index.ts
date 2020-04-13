import { AxiosResponse } from "axios";

import { PrivacyApiManager } from "..";

export abstract class PrivacyEndpoint<ResponseT> {
    /** HTTP method used in the request */
    method: string;
    /** Path of the request, appended to the baseUrl */
    path: string;
    /** Parameters serialized with the request */
    params: object;

    /**
     * Call this function to send an http request to the Privacy API and receive a response
     * @param manager Instance of {@link PrivacyApiManager} with which to execute the request
     */
    public async execute(manager: PrivacyApiManager): PrivacyResponse<ResponseT> {
        return manager.execute(this);
    }

    public beforeExecute?(manager: PrivacyApiManager): void;
}

export type PrivacyResponse<T> = Promise<AxiosResponse<T>>;
