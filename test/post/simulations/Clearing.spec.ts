import "mocha";

import { AxiosResponse } from "axios";
import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacySimulateAuthorizationParams,
    PrivacySimulateAuthorizationRequest,
} from "../../../src/endpoints/post/simulations/Authorization";
import {
    PrivacySimulateClearingParams,
    PrivacySimulateClearingRequest,
} from "../../../src/endpoints/post/simulations/Clearing";
import { privacyApiFixture } from "../../fixtures/apiManager";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateClearing basic", () => {
    let token: string;
    let response: AxiosResponse;

    before("Execute Request", async () => {
        const simulateAuthorizationParams: PrivacySimulateAuthorizationParams = {
            descriptor: "merchant descriptor",
            pan: privacyCardFixture.pan,
            amount: 100,
        };
        const simulateAuthorizationRequest = new PrivacySimulateAuthorizationRequest(simulateAuthorizationParams);
        token = (await simulateAuthorizationRequest.execute(privacyApiFixture)).data.token;

        const params: PrivacySimulateClearingParams = {
            token,
            amount: 50,
        };

        const request = new PrivacySimulateClearingRequest(params);
        response = await request.execute(privacyApiFixture);
    });

    it("should return an appropriate response containing an empty object", () => {
        expect(typeof response.data).to.equal("object");
        // debugging_request_id is always there in sandbox
        expect(Object.keys(response.data).length).to.equal(1);
        expect(response.status).to.equal(201);
    });
});
