import { Card } from "../../objects";
import { GetEndpoint, GetRequestPaginatedResponse } from ".";

const _defaultParams: ListCardsParams = {};

/**
 * List cards associated with the privacy account
 */
export class ListCardsRequest extends GetEndpoint {
    path: string = "/card";
    params: ListCardsParams;

    constructor(params: ListCardsParams = _defaultParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link ListCardsRequest}
 * @defaultValue {}
 */
export type ListCardsParams = {
    /** For pagination. The default is one */
    page?: number;
    /** For pagination. The default value page size is 50 and the maximum is 1,000 */
    page_size?: number;
    /** Date string in the form YYYY-MM-DD, only cards created after the specified date will be included */
    begin?: string;
    /** Date string in the form YYYY-MM-DD, only cards created before the specified date will be included */
    end?: string;
    /** Returns a specific card */
    card_token?: string;
};

export type ListCardsResponse = GetRequestPaginatedResponse<Card>;
