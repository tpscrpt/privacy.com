import { TokenData } from "..";
import { PostEndpoint } from "../";
import { Response } from "../..";

/**
 * Simulates an authorization request from the payment network as if it came from a merchant acquirer.
 * @remarks The API sends an event for all approvals. Decline events are available with API Issuing accounts and cannot be simulated.
 * @link https://developer.privacy.com/docs#transaction-webhooks
 */
export class SimulateAuthorizationRequest extends PostEndpoint {
    path: string = "/simulate/authorize";
    params: SimulateAuthorizationParams;

    constructor(params: SimulateAuthorizationParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link SimulateAuthorizationRequest}
 */
export type SimulateAuthorizationParams = {
    /** Merchant descriptor */
    descriptor: string;
    /** 16 digit card number */
    pan: string;
    /** Amount (in cents) to authorize */
    amount: number;
};

export type SimulateAuthorizationResponse = Response<TokenData>;
