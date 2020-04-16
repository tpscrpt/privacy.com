import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { AddBankParams, AddBankResponse, FundingAccount } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyFundingAccount } from "../mocks/fundingAccount";

describe("AddBank basic", () => {
    let response: AddBankResponse;

    before("Execute Request", async () => {
        const params: AddBankParams = {
            routing_number: "123454321",
            account_number: "0123454321",
        };
        response = await privacyApiFixture.addBank(params);
    });

    it("should return an appropriate response containing a valid FundingAccount type object", () => {
        const fundingAccountData: FundingAccount = response.data.data;
        Object.keys(privacyFundingAccount).forEach((key) => expect(fundingAccountData[key]).to.exist);
    });
});
