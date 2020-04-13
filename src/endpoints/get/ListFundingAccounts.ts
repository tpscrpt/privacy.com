import { PrivacyFundingAccount } from "../../objects";
import { PrivacyGetEndpoint } from ".";

const _defaultParams: PrivacyListFundingAccountsParams = {
    filter: "NONE",
};

/**
 * List all the funding accounts associated with the Privacy account
 */
export class PrivacyListFundingAccountsRequest extends PrivacyGetEndpoint<PrivacyListFundingAccountsResponse> {
    path: string = "/fundingsource";
    params = {};

    constructor(params: PrivacyListFundingAccountsParams = _defaultParams) {
        super();
        if (params.filter === "BANK") this.path += "/bank";
        else if (params.filter === "CARD") this.path += "/card";
    }
}

/**
 * Parameters for {@link PrivacyListFundingAccountsRequest}
 * @defaultValue { filter: "NONE" }
 */
export type PrivacyListFundingAccountsParams = {
    filter: /** List both bank and card funding accounts */
    | "NONE"
        /** List bank funding accounts */
        | "BANK"
        /** List card funding accounts */
        | "CARD";
};

export type PrivacyListFundingAccountsResponse = PrivacyFundingAccount[];
