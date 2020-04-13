import { PrivacyCard } from "../../objects";
import { PrivacyGetEndpoint, PrivacyGetRequestPaginatedResponse } from ".";

const _defaultParams: PrivacyListCardsParams = {};

/**
 * List cards associated with the Privacy account
 */
export class PrivacyListCardsRequest extends PrivacyGetEndpoint<PrivacyListCardsResponse> {
    path: string = "/card";
    params: PrivacyListCardsParams;

    constructor(params: PrivacyListCardsParams = _defaultParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacyListCardsRequest}
 * @defaultValue {}
 */
export type PrivacyListCardsParams = {
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

export type PrivacyListCardsResponse = PrivacyGetRequestPaginatedResponse<PrivacyCard>;
