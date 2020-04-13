import "mocha";

import { AxiosResponse } from "axios";
import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacySimulateAuthorizationParams,
    PrivacySimulateAuthorizationRequest,
} from "../../../src/endpoints/post/simulations/Authorization";
import { PrivacySimulateVoidParams, PrivacySimulateVoidRequest } from "../../../src/endpoints/post/simulations/Void";
import { privacyApiFixture } from "../../fixtures/apiManager";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateVoid basic", () => {
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

        const params: PrivacySimulateVoidParams = {
            token,
            amount: 50,
        };

        const request = new PrivacySimulateVoidRequest(params);
        response = await request.execute(privacyApiFixture);
    });

    it("should return an appropriate response containing an empty object", () => {
        expect(typeof response.data).to.equal("object");
        // debugging_request_id is always there in sandbox
        expect(Object.keys(response.data).length).to.equal(1);
        expect(response.status).to.equal(201);
    });
});
