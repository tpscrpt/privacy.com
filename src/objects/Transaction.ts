import { PrivacyCard } from "./Card";
import { PrivacyEvent } from "./Event";
import { PrivacyMerchant } from "./Merchant";

export type PrivacyTransaction = {
    /** Authorization amount (in cents) of the transaction. This may change over time */
    amount: number;
    /** See PrivacyCard */
    card: PrivacyCard;
    /** Date and time when the transaction first occurred */
    created: string;
    /** / A list of all events that have modified this transaction */
    events: PrivacyEvent;
    /** / See PrivacyPaymentFunding */
    funding: PrivacyTransactionFunding;
    /** See PrivacyMerchant */
    merchant: PrivacyMerchant;
    /** APPROVED or decline reason. See below for full enumeration */
    result: PrivacyTransactionResult;
    /** Amount (in cents) of the transaction that has been settled. This may change over time */
    settled_amount: number;
    /** PENDING, VOIDED, SETTLING, SETTLED, BOUNCED */
    status: PrivacyTransactionStatus;
    /** Globally unique identifier */
    token: string;
};

type PrivacyTransactionFunding = {
    /** amount represented in cents */
    amount: number;
    /** A reference to the funding account for the card that made this transaction may appear here and the token will match the token for the funding account in the card field */
    token: string;
    /** If any promotional credit was used in paying for this transaction, its type will be PROMO */
    type: "PROMO" | "";
};

export type PrivacyTransactionStatus =
    /** Authorization is pending completion from the merchant */
    | "PENDING"
    /** The merchant has voided the previously pending authorization */
    | "VOIDED"
    /** The merchant has completed the transaction and the funding source is being debited */
    | "SETTLING"
    /** The transaction is complete */
    | "SETTLED"
    /** There was an error settling the transaction against the funding source. Your API account may be disabled */
    | "BOUNCED";
export type PrivacyTransactionResult =
    /** Successful transaction; no reason to decline */

    | "APPROVED"
    /** Card state was paused at the time of authorization */
    | "CARD_PAUSED"
    /** Card state was closed at the time of authorization */
    | "CARD_CLOSED"
    /** Platform spend limit exceeded, contact support@privacy.com */
    | "GLOBAL_TRANSACTION_LIMIT"
    /** Platform spend limit exceeded, contact support@privacy.com */
    | "GLOBAL_WEEKLY_LIMIT"
    /** Platform spend limit exceeded, contact support@privacy.com */
    | "GLOBAL_MONTHLY_LIMIT"
    /** User-set spend limit exceeded */
    | "USER_TRANSACTION_LIMIT"
    /** Merchant locked card attempted at different merchant */
    | "UNAUTHORIZED_MERCHANT"
    /** Single use card attempted multiple times */
    | "SINGLE_USE_RECHARGED"
    /** Please reconnect a funding source */
    | "BANK_CONNECTION_ERROR"
    /** Please ensure the funding source is connected and up to date */
    | "INSUFFICIENT_FUNDS"
    /** This merchant is disallowed on the platform */
    | "MERCHANT_BLACKLIST"
    /** Incorrect CVV or expiry date */
    | "INVALID_CARD_DETAILS"
    /** Please confirm the funding source */
    | "BANK_NOT_VERIFIED"
    /** Contact support@privacy.com */
    | "INACTIVE_ACCOUNT"
    /** Contact support@privacy.com */
    | "ACCOUNT_STATE_TRANSACTION_FAIL"
    /** Network error, re-attempt the transaction */
    | "UNKNOWN_HOST_TIMEOUT"
    /** Network error, re-attempt the transaction */
    | "SWITCH_INOPERATIVE_ADVICE"
    /** Transaction declined due to risk */
    | "FRAUD_ADVICE";
