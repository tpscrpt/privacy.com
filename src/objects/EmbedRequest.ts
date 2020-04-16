export type EmbedRequest = {
    /** Globally unique identifier for the card to be displayed */
    token: string;
    /** A publicly available URI, so the hosted white-labeled iframe can be styled with the client's branding */
    css: string;
    /**
     * An ISO 8601 timestamp for when the request should expire.
     * @remarks If no timezone is specified, UTC will be used. If payload does not contain an expiration, the request will never expire.
     * Using an expiration reduces the risk of a replay attack. Without supplying the expiration, in the unlikely event that a malicious user gets a copy of your request in transit, they will be able to obtain the response data indefinitely.
     */
    expiration?: string;
};
