import { Endpoint, Response } from "../";

export abstract class GetEndpoint extends Endpoint {
    method: string = "GET";
    path: string;
    params: object;
}

/**
 * Generic response type for paginated endpoints
 * @remarks these are useful for endpoints which take "page, page_size" in their parameters
 *  - {@link ListCardsRequest}
 *  - {@link ListTransactionsRequest}
 */
export type GetRequestPaginatedResponse<T> = Response<{
    data: T[];
    /** page number returned to the user */
    page: number;
    /** number of entries returned by the query */
    total_entries: number;
    /** number of pages given the pagination settings */
    total_pages: number;
}>;
