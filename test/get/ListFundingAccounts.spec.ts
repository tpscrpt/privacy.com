import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacyListFundingAccountsRequest,
    PrivacyListFundingAccountsResponse,
} from "../../src/endpoints/get/ListFundingAccounts";
import { PrivacyFundingAccount } from "../../src/objects";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyFundingAccount } from "../mocks/fundingAccount";

describe("ListFundingAccounts basic", () => {
    let response: PrivacyListFundingAccountsResponse;

    before("Execute Request", async () => {
        const request = new PrivacyListFundingAccountsRequest();
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return an array of results with at least 1 member which matches PrivacyFundingAccount type", () => {
        expect(response.length).to.be.at.least(1);

        const fundingAccountData: PrivacyFundingAccount = response[0];
        Object.keys(privacyFundingAccount).forEach((key) => expect(fundingAccountData[key]).to.exist);
    });
});
