import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { PrivacyTokenResponse } from "../../../src/endpoints/post";
import {
    PrivacySimulateAuthorizationParams,
    PrivacySimulateAuthorizationRequest,
    PrivacySimulateAuthorizationResponse,
} from "../../../src/endpoints/post/simulations/Authorization";
import { privacyApiFixture } from "../../fixtures/apiManager";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateAuthorization basic", () => {
    let response: PrivacySimulateAuthorizationResponse;

    before("Execute Request", async () => {
        const params: PrivacySimulateAuthorizationParams = {
            descriptor: "merchant descriptor",
            pan: privacyCardFixture.pan,
            amount: 100,
        };
        const request = new PrivacySimulateAuthorizationRequest(params);
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return an appropriate response containing a valid PrivacyTokenResponse type object", () => {
        const tokenData: PrivacyTokenResponse = response;

        expect(typeof tokenData.token).to.equal("string");
        // v4 uuid has 36 length
        expect(tokenData.token.length).to.equal(36);
    });
});
