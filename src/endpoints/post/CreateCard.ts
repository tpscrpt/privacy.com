import { Response } from "..";
import { Card } from "../../objects";
import { CardSpendLimitDuration, CardState, CardType } from "../../objects/Card";
import { PostEndpoint } from ".";

/**
 * Create a new card for the privacy account
 */
export class CreateCardRequest extends PostEndpoint {
    path: string = "/card";
    params: CreateCardParams;

    constructor(params: CreateCardParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link CreateCardRequest}
 */
export type CreateCardParams = {
    type: CardType;
    /** Friendly name to identify the card */
    memo?: string;
    /** The token for the desired FundingAccount to use when making transactions with this card */
    funding_token?: string;
    /** Amount (in cents) to limit approved authorizations. Transaction requests above the spend limit will be declined */
    spend_limit?: number;
    spend_limit_duration?: CardSpendLimitDuration;
    state?: CardState;
};

export type CreateCardResponse = Response<Card>;
