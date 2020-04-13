import { PrivacyEndpoint } from "../";

export abstract class PrivacyGetEndpoint<ResponseT> extends PrivacyEndpoint<ResponseT> {
    method: string = "GET";
    path: string;
    params: object;
}

/**
 * Generic response type for paginated endpoints
 * @remarks these are useful for endpoints which take "page, page_size" in their parameters
 *  - {@link PrivacyListCardsRequest}
 *  - {@link PrivacyListTransactionsRequest}
 */
export type PrivacyGetRequestPaginatedResponse<PrivacyT> = {
    data: PrivacyT[];
    /** page number returned to the user */
    page: number;
    /** number of entries returned by the query */
    total_entries: number;
    /** number of pages given the pagination settings */
    total_pages: number;
};
