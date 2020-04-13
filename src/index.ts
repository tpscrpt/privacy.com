import Axios from "axios";

import { PrivacyEndpoint, PrivacyResponse } from "./endpoints";

export { PrivacyListCardsRequest, PrivacyListCardsResponse, PrivacyListCardsParams } from "./endpoints/get/ListCards";
export {
    PrivacyListFundingAccountsRequest,
    PrivacyListFundingAccountsResponse,
    PrivacyListFundingAccountsParams,
} from "./endpoints/get/ListFundingAccounts";
export {
    PrivacyListTransactionsRequest,
    PrivacyListTransactionsResponse,
    PrivacyListTransactionsParams,
} from "./endpoints/get/ListTransactions";
export {
    PrivacyHostedCardUiRequest,
    PrivacyHostedCardUiResponse,
    PrivacyHostedCardUiParams,
} from "./endpoints/get/HostedCardUi";

export {
    PrivacyCreateCardRequest,
    PrivacyCreateCardResponse,
    PrivacyCreateCardParams,
} from "./endpoints/post/CreateCard";
export { PrivacyAddBankRequest, PrivacyAddBankResponse, PrivacyAddBankParams } from "./endpoints/post/AddBank";

export {
    PrivacyUpdateCardRequest,
    PrivacyUpdateCardResponse,
    PrivacyUpdateCardParams,
} from "./endpoints/put/UpdateCard";

export {
    PrivacySimulateAuthorizationRequest,
    PrivacySimulateAuthorizationResponse,
    PrivacySimulateAuthorizationParams,
} from "./endpoints/post/simulations/Authorization";
export {
    PrivacySimulateVoidRequest,
    PrivacySimulateVoidResponse,
    PrivacySimulateVoidParams,
} from "./endpoints/post/simulations/Void";
export {
    PrivacySimulateClearingRequest,
    PrivacySimulateClearingResponse,
    PrivacySimulateClearingParams,
} from "./endpoints/post/simulations/Clearing";
export {
    PrivacySimulateReturnRequest,
    PrivacySimulateReturnResponse,
    PrivacySimulateReturnParams,
} from "./endpoints/post/simulations/Return";

export {
    PrivacyCard,
    PrivacyEmbedRequest,
    PrivacyEvent,
    PrivacyMerchant,
    PrivacyFundingAccount,
    PrivacyTransaction,
} from "./objects";

class PrivacyApiManager {
    apiKey: string;
    sandbox: boolean;
    version: string;
    baseUrl: string;

    /**
     *
     * @param apiKey Privacy API Key to use for requests
     * @param sandbox Execute requests in sandbox mode or not @defaultValue true
     * @param version API version to use for requests @defaultValue "v1"
     */
    constructor(apiKey: string, sandbox: boolean = true, version: string = "v1") {
        this.apiKey = apiKey;
        this.sandbox = sandbox;
        this.version = version;
        this.baseUrl = this.getBaseUrl();
    }

    public async execute(request: PrivacyEndpoint<any>): PrivacyResponse<any> {
        if (request.beforeExecute) request.beforeExecute(this);

        const requestUrl = `${this.baseUrl}${request.path}`;
        const method = request.method;
        const apiKey = this.apiKey;
        const params = request.params;
        const headers = {
            Authorization: `api-key ${apiKey}`,
        };

        switch (method) {
            case "GET":
                return Axios.get(requestUrl, {
                    headers,
                    params,
                });
            case "PUT":
                return Axios.put(requestUrl, params, {
                    headers,
                });
            case "POST":
                return Axios.post(requestUrl, params, {
                    headers,
                });
            default:
                return new Promise((_, reject) => reject("INVALID_REQUEST_METHOD"));
        }
    }

    private getBaseUrl(): string {
        return `https://${this.sandbox ? "sandbox" : "api"}.privacy.com/${this.version}`;
    }
}

export { PrivacyApiManager as PrivacyApi, PrivacyApiManager };
