import Axios from "axios";

import { Endpoint, Response } from "./endpoints";
import { HostedCardUiParams, HostedCardUiRequest, HostedCardUiResponse } from "./endpoints/get/HostedCardUi";
import { ListCardsParams, ListCardsRequest, ListCardsResponse } from "./endpoints/get/ListCards";
import {
    ListFundingAccountsParams,
    ListFundingAccountsRequest,
    ListFundingAccountsResponse,
} from "./endpoints/get/ListFundingAccounts";
import {
    ListTransactionsParams,
    ListTransactionsRequest,
    ListTransactionsResponse,
} from "./endpoints/get/ListTransactions";
import { AddBankParams, AddBankRequest, AddBankResponse } from "./endpoints/post/AddBank";
import { CreateCardParams, CreateCardRequest, CreateCardResponse } from "./endpoints/post/CreateCard";
import {
    SimulateAuthorizationParams,
    SimulateAuthorizationRequest,
    SimulateAuthorizationResponse,
} from "./endpoints/post/simulations/Authorization";
import {
    SimulateClearingParams,
    SimulateClearingRequest,
    SimulateClearingResponse,
} from "./endpoints/post/simulations/Clearing";
import {
    SimulateReturnParams,
    SimulateReturnRequest,
    SimulateReturnResponse,
} from "./endpoints/post/simulations/Return";
import { SimulateVoidParams, SimulateVoidRequest, SimulateVoidResponse } from "./endpoints/post/simulations/Void";
import { UpdateCardParams, UpdateCardRequest, UpdateCardResponse } from "./endpoints/put/UpdateCard";

export { Card, EmbedRequest, Event, Merchant, FundingAccount, Transaction } from "./objects";

export { TokenData } from "./endpoints/post";

export {
    HostedCardUiResponse,
    ListCardsResponse,
    ListFundingAccountsResponse,
    ListTransactionsResponse,
    UpdateCardResponse,
    CreateCardResponse,
    AddBankResponse,
    SimulateAuthorizationResponse,
    SimulateVoidResponse,
    SimulateClearingResponse,
    SimulateReturnResponse,
};

export {
    HostedCardUiParams,
    ListCardsParams,
    ListFundingAccountsParams,
    ListTransactionsParams,
    UpdateCardParams,
    CreateCardParams,
    AddBankParams,
    SimulateAuthorizationParams,
    SimulateVoidParams,
    SimulateClearingParams,
    SimulateReturnParams,
};

class PrivacyApi {
    apiKey: string;
    sandbox: boolean;
    version: string;
    baseUrl: string;
    headers: object;

    /**
     *
     * @param apiKey  API Key to use for requests
     * @param sandbox Execute requests in sandbox mode or not @defaultValue true
     * @param version API version to use for requests @defaultValue "v1"
     */
    constructor(apiKey: string, sandbox: boolean = true, version: string = "v1") {
        this.apiKey = apiKey;
        this.sandbox = sandbox;
        this.version = version;
        this.baseUrl = this.getBaseUrl();
        this.headers = { Authorization: `api-key ${this.apiKey}` };
    }

    public execute(request: Endpoint): Promise<Response<any>> {
        if (request.beforeExecute) request.beforeExecute(this);

        const requestUrl = `${this.baseUrl}${request.path}`;
        const method = request.method;
        const params = request.params;
        const headers = {
            ...this.headers,
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

    /**
     * Create a new card for the privacy account
     */
    public createCard(params: CreateCardParams): Promise<CreateCardResponse> {
        return this.execute(new CreateCardRequest(params));
    }

    /**
     * Adds a bank account as a funding source using routing and account numbers. Returns a FundingAccount object containing the bank information.
     */
    public addBank(params: AddBankParams): Promise<AddBankResponse> {
        return this.execute(new AddBankRequest(params));
    }

    /**
     * List cards associated with the privacy account
     */
    public listCards(params?: ListCardsParams): Promise<ListCardsResponse> {
        return this.execute(new ListCardsRequest(params));
    }

    /**
     * List all the funding accounts associated with the privacy account
     */
    public listFundingAccounts(params?: ListFundingAccountsParams): Promise<ListFundingAccountsResponse> {
        return this.execute(new ListFundingAccountsRequest(params));
    }

    /**
     * List transactions associated with the privacy account or a specific card
     */
    public listTransactions(params?: ListTransactionsParams): Promise<ListTransactionsResponse> {
        return this.execute(new ListTransactionsRequest(params));
    }

    /**
     * Get iframe data to display card details
     * @remarks The iframe body will provide consistent markup of the following form.
     * It is up to the API client to provide css styles for these elements in the EmbedRequest.
     * ```html
     * <div id="card">
     *   <div id="pan">{PAN}</div>
     *   <div id="expiry">
     *     <span id="month">{expMonth}</span>
     *     <span id="separator">/</span>
     *     <span id="year">{expYear}</span>
     *   </div>
     *   <div id="cvv">{CVV}</div>
     * </div>
     * ```
     */
    public hostedCardUi(params: HostedCardUiParams): Promise<HostedCardUiResponse> {
        return this.execute(new HostedCardUiRequest(params));
    }

    /**
     * Update a card by its token for the privacy account
     */
    public updateCard(params: UpdateCardParams): Promise<UpdateCardResponse> {
        return this.execute(new UpdateCardRequest(params));
    }

    /**
     * Simulates an authorization request from the payment network as if it came from a merchant acquirer.
     * @remarks The API sends an event for all approvals. Decline events are available with API Issuing accounts and cannot be simulated.
     * @link https://developer.privacy.com/docs#transaction-webhooks
     */
    public simulateAuthorization(params: SimulateAuthorizationParams): Promise<SimulateAuthorizationResponse> {
        return this.execute(new SimulateAuthorizationRequest(params));
    }

    /**
     * Voids an existing, uncleared (aka pending) authorization.
     * @remarks Previous pending authorization is voided
     */
    public simulateVoid(params: SimulateVoidParams): Promise<SimulateVoidResponse> {
        return this.execute(new SimulateVoidRequest(params));
    }

    /**
     * Clears an existing authorization. After this event, the transaction is no longer pending.
     * @remarks Clearing for an existing, pending authorization
     */
    public simulateClearing(params: SimulateClearingParams): Promise<SimulateClearingResponse> {
        return this.execute(new SimulateClearingRequest(params));
    }

    /**
     * Returns (aka refunds) an amount back to a card. Returns are cleared immediately and do not spend time in a "pending" state.
     * @remarks Refund — value is pushed onto card
     */
    public simulateReturn(params: SimulateReturnParams): Promise<SimulateReturnResponse> {
        return this.execute(new SimulateReturnRequest(params));
    }

    private getBaseUrl(): string {
        return `https://${this.sandbox ? "sandbox" : "api"}.privacy.com/${this.version}`;
    }
}

export { PrivacyApi };
