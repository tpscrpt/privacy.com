import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { PrivacyTokenResponse } from "../../../src/endpoints/post";
import {
    PrivacySimulateReturnParams,
    PrivacySimulateReturnRequest,
    PrivacySimulateReturnResponse,
} from "../../../src/endpoints/post/simulations/Return";
import { privacyApiFixture } from "../../fixtures/apiManager";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateReturn basic", () => {
    let response: PrivacySimulateReturnResponse;

    before("Execute Request", async () => {
        const params: PrivacySimulateReturnParams = {
            descriptor: "merchant descriptor",
            pan: privacyCardFixture.pan,
            amount: 100,
        };
        const request = new PrivacySimulateReturnRequest(params);
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return an appropriate response containing a valid PrivacyTokenResponse type object", () => {
        const tokenData: PrivacyTokenResponse = response;

        expect(typeof tokenData.token).to.equal("string");
        // v4 uuid has 36 length
        expect(tokenData.token.length).to.equal(36);
    });
});
