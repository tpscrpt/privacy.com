import { PrivacyTokenResponse } from "..";
import { PrivacyPostEndpoint } from "../";

/**
 * Returns (aka refunds) an amount back to a card. Returns are cleared immediately and do not spend time in a "pending" state.
 * @remarks Refund — value is pushed onto card
 */
export class PrivacySimulateReturnRequest extends PrivacyPostEndpoint<PrivacySimulateReturnResponse> {
    path: string = "/simulate/return";
    params: PrivacySimulateReturnParams;

    constructor(params: PrivacySimulateReturnParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacySimulateReturnRequest}
 */
export type PrivacySimulateReturnParams = {
    /** Merchant descriptor */
    descriptor: string;
    /** 16 digit card number */
    pan: string;
    /** Amount (in cents) to return to the card */
    amount: number;
};

export type PrivacySimulateReturnResponse = PrivacyTokenResponse;
