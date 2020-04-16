import { Response } from "..";
import { Card } from "../../objects";
import { CardSpendLimitDuration, CardState } from "../../objects/Card";
import { PutEndpoint } from ".";

/**
 * Update a card by its token for the privacy account
 */
export class UpdateCardRequest extends PutEndpoint {
    path: string = "/card";
    params: UpdateCardParams;

    constructor(params: UpdateCardParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link UpdateCardRequest}
 */
export type UpdateCardParams = {
    /** The unique token of the card to update */
    card_token: string;
    /** Friendly name to identify the card */
    memo?: string;
    /** The token for the desired FundingAccount to use when making transactions with this card */
    funding_token?: string;
    /** Amount (in cents) to limit approved authorizations. Transaction requests above the spend limit will be declined */
    spend_limit?: number;
    spend_limit_duration?: CardSpendLimitDuration;
    state?: CardState;
};

export type UpdateCardResponse = Response<Card>;
