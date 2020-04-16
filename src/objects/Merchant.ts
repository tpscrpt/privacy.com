export type Merchant = {
    /** Unique identifier to identify the payment card acceptor */
    acceptor_id: string;
    /** City of card acceptor */
    city: string;
    /** Country of card acceptor */
    country: string;
    /** Short description of card acceptor */
    descriptor: string;
    /** Merchant category code */
    mcc: string;
    /** Geographic state of card acceptor */
    state: string;
};
