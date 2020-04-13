import { PrivacyPostEndpoint } from "../";

/**
 * Voids an existing, uncleared (aka pending) authorization.
 * @remarks Previous pending authorization is voided
 */
export class PrivacySimulateVoidRequest extends PrivacyPostEndpoint<PrivacySimulateVoidResponse> {
    path: string = "/simulate/void";
    params: PrivacySimulateVoidParams;

    constructor(params: PrivacySimulateVoidParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacySimulateVoidRequest}
 */
export type PrivacySimulateVoidParams = {
    /** The transaction token returned from the /v1/simulate/authorize response */
    token: string;
    /** Amount (in cents) to void. Typically this will match the original authorization, but may be less */
    amount: number;
};

export type PrivacySimulateVoidResponse = {};
