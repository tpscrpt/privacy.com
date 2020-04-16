import { TransactionResult } from "./Transaction";

export type Event = {
    /** Amount of the transaction event */
    amount: number;
    /** Date and time this event entered the system */
    created: string;
    /** APPROVED or decline reason. See below for full enumeration */
    result: TransactionResult;
    /** Globally unique identifier */
    token: string;
    /** AUTHORIZATION, AUTHORIZATION_ADVICE, CLEARING, VOID, RETURN */
    type: EventType;
};

export type EventType =
    /** The API sends an event for all approvals */
    | "AUTHORIZATION"
    /** Transaction was declined by the network (available for accounts with Issuing enabled) */
    | "AUTHORIZATION_ADVICE"
    /** Clearing for an existing, pending authorization */
    | "CLEARING"
    /** Previous pending authorization is voided */
    | "VOID"
    /** Refund — value is pushed onto card */
    | "RETURN";
