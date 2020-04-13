import { PrivacyPostEndpoint } from "../";

/**
 * Clears an existing authorization. After this event, the transaction is no longer pending.
 * @remarks Clearing for an existing, pending authorization
 */
export class PrivacySimulateClearingRequest extends PrivacyPostEndpoint<PrivacySimulateClearingResponse> {
    path: string = "/simulate/clearing";
    params: PrivacySimulateClearingParams;

    constructor(params: PrivacySimulateClearingParams) {
        super();
        this.params = params;
    }
}

/** Parameters for {@link PrivacySimulateClearingRequest} */
export type PrivacySimulateClearingParams = {
    /** The transaction token returned from the /v1/simulate/authorize response */
    token: string;
    /** Amount (in cents) to complete. Typically this will match the original authorization, but may be more or less */
    amount: number;
};

export type PrivacySimulateClearingResponse = {};
