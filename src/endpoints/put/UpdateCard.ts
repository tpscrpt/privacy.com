import { PrivacyCard } from "../../objects";
import { PrivacyCardSpendLimitDuration, PrivacyCardState } from "../../objects/Card";
import { PrivacyPutEndpoint } from ".";

/**
 * Update a card by its token for the Privacy account
 */
export class PrivacyUpdateCardRequest extends PrivacyPutEndpoint<PrivacyUpdateCardResponse> {
    path: string = "/card";
    params: PrivacyUpdateCardParams;

    constructor(params: PrivacyUpdateCardParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacyUpdateCardRequest}
 */
export type PrivacyUpdateCardParams = {
    /** The unique token of the card to update */
    card_token: string;
    /** Friendly name to identify the card */
    memo?: string;
    /** The token for the desired FundingAccount to use when making transactions with this card */
    funding_token?: string;
    /** Amount (in cents) to limit approved authorizations. Transaction requests above the spend limit will be declined */
    spend_limit?: number;
    spend_limit_duration?: PrivacyCardSpendLimitDuration;
    state?: PrivacyCardState;
};

export type PrivacyUpdateCardResponse = PrivacyCard;
