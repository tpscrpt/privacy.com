import { PostEndpoint } from "../";
import { Response } from "../..";

/**
 * Clears an existing authorization. After this event, the transaction is no longer pending.
 * @remarks Clearing for an existing, pending authorization
 */
export class SimulateClearingRequest extends PostEndpoint {
    path: string = "/simulate/clearing";
    params: SimulateClearingParams;

    constructor(params: SimulateClearingParams) {
        super();
        this.params = params;
    }
}

/** Parameters for {@link SimulateClearingRequest} */
export type SimulateClearingParams = {
    /** The transaction token returned from the /v1/simulate/authorize response */
    token: string;
    /** Amount (in cents) to complete. Typically this will match the original authorization, but may be more or less */
    amount: number;
};

export type SimulateClearingResponse = Response<{}>;
