import { TokenData } from "..";
import { PostEndpoint } from "../";
import { Response } from "../..";

/**
 * Returns (aka refunds) an amount back to a card. Returns are cleared immediately and do not spend time in a "pending" state.
 * @remarks Refund — value is pushed onto card
 */
export class SimulateReturnRequest extends PostEndpoint {
    path: string = "/simulate/return";
    params: SimulateReturnParams;

    constructor(params: SimulateReturnParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link SimulateReturnRequest}
 */
export type SimulateReturnParams = {
    /** Merchant descriptor */
    descriptor: string;
    /** 16 digit card number */
    pan: string;
    /** Amount (in cents) to return to the card */
    amount: number;
};

export type SimulateReturnResponse = Response<TokenData>;
