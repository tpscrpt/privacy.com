import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { PrivacyAddBankParams, PrivacyAddBankRequest, PrivacyAddBankResponse } from "../../src/endpoints/post/AddBank";
import { PrivacyFundingAccount } from "../../src/objects";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyFundingAccount } from "../mocks/fundingAccount";

describe("AddBank basic", () => {
    let response: PrivacyAddBankResponse;

    before("Execute Request", async () => {
        const params: PrivacyAddBankParams = {
            routing_number: "123454321",
            account_number: "0123454321",
        };
        const request = new PrivacyAddBankRequest(params);
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return an appropriate response containing a valid PrivacyFundingAccount type object", () => {
        const fundingAccountData: PrivacyFundingAccount = response.data;
        Object.keys(privacyFundingAccount).forEach((key) => expect(fundingAccountData[key]).to.exist);
    });
});
