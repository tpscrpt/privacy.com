import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { ListFundingAccountsResponse, FundingAccount } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyFundingAccount } from "../mocks/fundingAccount";

describe("ListFundingAccounts basic", () => {
    let response: ListFundingAccountsResponse;

    before("Execute Request", async () => {
        response = await privacyApiFixture.listFundingAccounts();
    });

    it("should return an array of results with at least 1 member which matches FundingAccount type", () => {
        expect(response.data.length).to.be.at.least(1);

        const fundingAccountData: FundingAccount = response.data[0];
        Object.keys(privacyFundingAccount).forEach((key) => expect(fundingAccountData[key]).to.exist);
    });
});
