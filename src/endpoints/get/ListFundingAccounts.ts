import { Response } from "..";
import { FundingAccount } from "../../objects";
import { GetEndpoint } from ".";

const _defaultParams: ListFundingAccountsParams = {
    filter: "NONE",
};

/**
 * List all the funding accounts associated with the privacy account
 */
export class ListFundingAccountsRequest extends GetEndpoint {
    path: string = "/fundingsource";
    params = {};

    constructor(params: ListFundingAccountsParams = _defaultParams) {
        super();
        if (params.filter === "BANK") this.path += "/bank";
        else if (params.filter === "CARD") this.path += "/card";
    }
}

/**
 * Parameters for {@link ListFundingAccountsRequest}
 * @defaultValue { filter: "NONE" }
 */
export type ListFundingAccountsParams = {
    filter: /** List both bank and card funding accounts */
    | "NONE"
        /** List bank funding accounts */
        | "BANK"
        /** List card funding accounts */
        | "CARD";
};

export type ListFundingAccountsResponse = Response<FundingAccount[]>;
