import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { SimulateReturnParams, SimulateReturnResponse, TokenData } from "../../../src";
import { privacyApiFixture } from "../../fixtures/privacyApi";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateReturn basic", () => {
    let response: SimulateReturnResponse;

    before("Execute Request", async () => {
        const params: SimulateReturnParams = {
            descriptor: "merchant descriptor",
            pan: privacyCardFixture.pan,
            amount: 100,
        };
        response = await privacyApiFixture.simulateReturn(params);
    });

    it("should return an appropriate response containing a valid TokenResponse type object", () => {
        const tokenData: TokenData = response.data;

        expect(typeof tokenData.token).to.equal("string");
        // v4 uuid has 36 length
        expect(tokenData.token.length).to.equal(36);
    });
});
