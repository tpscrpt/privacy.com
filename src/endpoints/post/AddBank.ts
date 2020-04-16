import { Response } from "..";
import { FundingAccount } from "../../objects";
import { PostEndpoint } from ".";

/**
 * Adds a bank account as a funding source using routing and account numbers. Returns a FundingAccount object containing the bank information.
 */
export class AddBankRequest extends PostEndpoint {
    path: string = "/fundingsource/bank";
    params: AddBankParams;

    constructor(params: AddBankParams) {
        super();
        this.params = params;
    }
}

/**
 * Parameters for {@link AddBankRequest}
 */
export type AddBankParams = {
    /** The routing number of the bank account */
    routing_number: string;
    /** The account number of the bank account */
    account_number: string;
    /** The name associated with the bank account. This property is only for identification purposes, and has no bearing on the external properties of the bank. */
    account_name?: string;
};

export type AddBankResponse = Response<{
    data: FundingAccount;
}>;
