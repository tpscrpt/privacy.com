import { FundingAccount } from "./FundingAccount";

export type Card = {
    /** An ISO 8601 timestamp for when the card was created */
    created: string;
    /** Three digit cvv printed on the back of the card */
    cvv: string;
    /** See FundingAccount */
    funding: FundingAccount;
    /** Two digit (MM) expiry month */
    exp_month: string;
    /** Four digit (YYYY) expiry year */
    exp_year: string;
    /** Hostname of card’s locked merchant (will be empty if not applicable) */
    hostname?: string;
    /** Last four digits of the card number */
    last_four: string;
    /** Friendly name to identify the card */
    memo: string;
    /** Sixteen digit card number */
    pan: string;
    /** Amount (in cents) to limit approved authorizations. Transaction requests above the spend limit will be declined. A card with no limit has this field set to 0 */
    spend_limit: number;
    /** TRANSACTION, MONTHLY, ANNUALLY, FOREVER */
    spend_limit_duration: CardSpendLimitDuration;
    /** OPEN, PAUSED, CLOSED */
    state: CardState;
    /** Globally unique identifier */
    token: string;
    /** SINGLE_USE, MERCHANT_LOCKED, UNLOCKED */
    type: CardType;
};

export type CardType =
    /** Card will authorize at any merchant. Creating these cards requires additional privileges. */
    | "UNLOCKED"
    /** Card will close shortly after the first transaction */
    | "SINGLE_USE"
    /** Card is locked to first merchant that successfully authorizes the card */
    | "MERCHANT_LOCKED"
    /** Similar to unlocked, but a physical card */
    | "PHYSICAL";
export type CardState =
    /** Card will approve authorizations (if they match card and account parameters) */
    | "OPEN"
    /** Card will decline authorizations, but can be resumed at a later time */
    | "PAUSED"
    /** Card will no longer approve authorizations. Closing a card cannot be undone */
    | "CLOSED";
export type CardSpendLimitDuration =
    /** Card will authorizate multiple transactions if each individual transaction is under the spend limit */
    | "TRANSACTION"
    /** Card will authorize transactions up to spend limit for the trailing month. (Note month is calculated as this calendar date one month prior) */
    | "MONTHLY"
    /** Card will authorize transactions up to spend limit in a calendar year */
    | "ANNUALLY"
    /** Card will authorize only up to spend limit for the entire lifetime of the card */
    | "FOREVER";
