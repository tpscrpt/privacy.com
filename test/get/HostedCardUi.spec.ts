import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { PrivacyHostedCardUiRequest, PrivacyHostedCardUiResponse } from "../../src/endpoints/get/HostedCardUi";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyCardFixture } from "../fixtures/card";

describe("ListFundingAccounts basic", () => {
    const cssUrl =
        "https://raw.githubusercontent.com/ArkEcosystem/desktop-wallet/develop/src/renderer/styles/_general.css";
    let response: PrivacyHostedCardUiResponse;

    before("Execute Request", async () => {
        const request = new PrivacyHostedCardUiRequest({
            embed_request: {
                css: cssUrl,
                token: privacyCardFixture.token,
            },
        });
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return a response with valid card details", () => {
        const { pan, exp_month, exp_year, cvv } = privacyCardFixture;
        const separator = "/";

        expect(response.search(`<link rel="stylesheet" type="text/css" href="${cssUrl}">`)).not.to.equal(-1);
        expect(response.search(`<div id="pan">${pan}</div>`)).not.to.equal(-1);
        expect(response.search(`<span id="month">${exp_month}</span>`)).not.to.equal(-1);
        expect(response.search(`<span id="separator">${separator}</span>`)).not.to.equal(-1);
        // response HTML includes year as two last digits, whereas API PrivacyCard object type has it in XXXX format
        expect(response.search(`<span id="year">${exp_year.substr(2, 2)}</span>`)).not.to.equal(-1);
        expect(response.search(`<div id="cvv">${cvv}</div>`)).not.to.equal(-1);
    });
});
