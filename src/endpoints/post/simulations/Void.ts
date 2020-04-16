import { PostEndpoint } from "../";
import { Response } from "../..";

/**
 * Voids an existing, uncleared (aka pending) authorization.
 * @remarks Previous pending authorization is voided
 */
export class SimulateVoidRequest extends PostEndpoint {
    path: string = "/simulate/void";
    params: SimulateVoidParams;

    constructor(params: SimulateVoidParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link SimulateVoidRequest}
 */
export type SimulateVoidParams = {
    /** The transaction token returned from the /v1/simulate/authorize response */
    token: string;
    /** Amount (in cents) to void. Typically this will match the original authorization, but may be less */
    amount: number;
};

export type SimulateVoidResponse = Response<{}>;
