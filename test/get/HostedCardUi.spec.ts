import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { HostedCardUiResponse } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyCardFixture } from "../fixtures/card";

describe("HostedCardUi valid", () => {
    const cssUrl =
        "https://raw.githubusercontent.com/JeremiGendron/privacy.com/358e8589d9644e9b2a1629c7e8e8d1e0c4b57950/test/data/hostedUi.css";
    let response: HostedCardUiResponse;

    before("Execute Request", async () => {
        response = await privacyApiFixture.hostedCardUi({
            embed_request: {
                css: cssUrl,
                token: privacyCardFixture.token,
            },
        });
    });

    it("should return a response with valid card details", () => {
        const { pan, exp_month, exp_year, cvv } = privacyCardFixture;
        const separator = "/";

        expect(response.data.search(`<link rel="stylesheet" type="text/css" href="${cssUrl}">`)).not.to.equal(-1);
        expect(response.data.search(`<div id="pan">${pan}</div>`)).not.to.equal(-1);
        expect(response.data.search(`<span id="month">${exp_month}</span>`)).not.to.equal(-1);
        expect(response.data.search(`<span id="separator">${separator}</span>`)).not.to.equal(-1);
        // response HTML includes year as two last digits, whereas API Card object type has it in XXXX format
        expect(response.data.search(`<span id="year">${exp_year.substr(2, 2)}</span>`)).not.to.equal(-1);
        expect(response.data.search(`<div id="cvv">${cvv}</div>`)).not.to.equal(-1);
    });
});
