import { Transaction } from "../../objects";
import { GetEndpoint, GetRequestPaginatedResponse } from ".";

const _defaultParams: ListTransactionsParams = {
    approval_status: "ALL",
};

/**
 * List transactions associated with the privacy account or a specific card
 */
export class ListTransactionsRequest extends GetEndpoint {
    path: string = "/transaction";
    params: ListTransactionsParams;

    constructor(params: ListTransactionsParams = _defaultParams) {
        super();
        this.params = params;
        switch (this.params.approval_status) {
            case "ALL":
                this.path += "/all";
                break;
            case "APPROVALS":
                this.path += "/approvals";
                break;
            case "DECLINES":
                this.path += "/declines";
                break;
        }
        delete this.params.approval_status;
    }
}

/**
 * Parameters for {@link ListTransactionsRequest}
 * @defaultValue { approval_status: "ALL" }
 */
export type ListTransactionsParams = {
    approval_status: /** List all transactions */
    | "ALL"
        /** List approved transactions */
        | "APPROVALS"
        /** List declined transactions */
        | "DECLINES";
    /** For pagination. The default is one */
    page?: number;
    /** For pagination. The default value page size is 50 and the maximum is 1,000 */
    page_size?: number;
    /** Date string in the form YYYY-MM-DD, only transactions created after the specified date will be included */
    begin?: string;
    /** Date string in the form YYYY-MM-DD, only transactions created before the specified date will be included */
    end?: string;
    /** Filters transactions associated with a specific card */
    card_token?: string;
    /** Returns a specific transaction */
    transaction_token?: string;
};

export type ListTransactionsResponse = GetRequestPaginatedResponse<Transaction>;
