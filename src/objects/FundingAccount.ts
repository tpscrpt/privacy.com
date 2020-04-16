export type FundingAccount = {
    /** Account name identifying the funding source. This may be null */
    account_name?: string;
    /** An ISO 8601 string representing when this funding source was added to the  account. This may be null */
    created?: string;
    /** The last 4 digits of the account (e.g. bank account, debit card) associated with this FundingAccount. This may be null */
    last_four?: string;
    /** The nickname given to the FundingAccount or null if it has no nickname */
    nickname?: string;
    /** State of funding source, see enumerations for list */
    state: FundingAccountState;
    /** A globally unique identifier for this FundingAccount */
    token: string;
    /** Type of funding source, see enumerations for list */
    type: FundingAccountType;
};

export type FundingAccountState =
    /** The funding account is still being verified e.g. bank micro-deposits verification */
    | "PENDING"
    /** The funding account is available to use for card creation and transactions */
    | "ENABLED";

export type FundingAccountType =
    /** Bank checking account */
    | "DEPOSITORY_CHECKING"
    /** Bank savings account */
    | "DEPOSITORY_SAVINGS"
    /** Debit card */
    | "CARD_DEBIT";
