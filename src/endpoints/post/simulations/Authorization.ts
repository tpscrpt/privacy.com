import { PrivacyTokenResponse } from "..";
import { PrivacyPostEndpoint } from "../";

/**
 * Simulates an authorization request from the payment network as if it came from a merchant acquirer.
 * @remarks The API sends an event for all approvals. Decline events are available with API Issuing accounts and cannot be simulated.
 * @link https://developer.privacy.com/docs#transaction-webhooks
 */
export class PrivacySimulateAuthorizationRequest extends PrivacyPostEndpoint<PrivacySimulateAuthorizationResponse> {
    path: string = "/simulate/authorize";
    params: PrivacySimulateAuthorizationParams;

    constructor(params: PrivacySimulateAuthorizationParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacySimulateAuthorizationRequest}
 */
export type PrivacySimulateAuthorizationParams = {
    /** Merchant descriptor */
    descriptor: string;
    /** 16 digit card number */
    pan: string;
    /** Amount (in cents) to authorize */
    amount: number;
};

export type PrivacySimulateAuthorizationResponse = PrivacyTokenResponse;
