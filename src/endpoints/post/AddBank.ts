import { PrivacyFundingAccount } from "../../objects";
import { PrivacyPostEndpoint } from ".";

/**
 * Adds a bank account as a funding source using routing and account numbers. Returns a FundingAccount object containing the bank information.
 */
export class PrivacyAddBankRequest extends PrivacyPostEndpoint<PrivacyAddBankResponse> {
    path: string = "/fundingsource/bank";
    params: PrivacyAddBankParams;

    constructor(params: PrivacyAddBankParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link PrivacyAddBankRequest}
 */
export type PrivacyAddBankParams = {
    /** The routing number of the bank account */
    routing_number: string;
    /** The account number of the bank account */
    account_number: string;
    /** The name associated with the bank account. This property is only for identification purposes, and has no bearing on the external properties of the bank. */
    account_name?: string;
};

export type PrivacyAddBankResponse = {
    data: PrivacyFundingAccount;
};
