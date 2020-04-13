import { PrivacyCard } from "../../objects";
import { PrivacyCardSpendLimitDuration, PrivacyCardState, PrivacyCardType } from "../../objects/Card";
import { PrivacyPostEndpoint } from ".";

/**
 * Create a new card for the Privacy account
 */
export class PrivacyCreateCardRequest extends PrivacyPostEndpoint<PrivacyCreateCardResponse> {
    path: string = "/card";
    params: PrivacyCreateCardParams;

    constructor(params: PrivacyCreateCardParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacyCreateCardRequest}
 */
export type PrivacyCreateCardParams = {
    type: PrivacyCardType;
    /** Friendly name to identify the card */
    memo?: string;
    /** The token for the desired FundingAccount to use when making transactions with this card */
    funding_token?: string;
    /** Amount (in cents) to limit approved authorizations. Transaction requests above the spend limit will be declined */
    spend_limit?: number;
    spend_limit_duration?: PrivacyCardSpendLimitDuration;
    state?: PrivacyCardState;
};

export type PrivacyCreateCardResponse = PrivacyCard;
