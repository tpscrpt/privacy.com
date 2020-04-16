import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { SimulateAuthorizationParams } from "../../../src/endpoints/post/simulations/Authorization";
import { SimulateVoidParams, SimulateVoidResponse } from "../../../src/endpoints/post/simulations/Void";
import { privacyApiFixture } from "../../fixtures/privacyApi";
import { privacyCardFixture } from "../../fixtures/card";

describe("SimulateVoid basic", () => {
    let token: string;
    let response: SimulateVoidResponse;

    before("Execute Request", async () => {
        const simulateAuthorizationParams: SimulateAuthorizationParams = {
            descriptor: "merchant descriptor",
            pan: privacyCardFixture.pan,
            amount: 100,
        };
        token = await (await privacyApiFixture.simulateAuthorization(simulateAuthorizationParams)).data.token;

        const params: SimulateVoidParams = {
            token,
            amount: 50,
        };

        response = await privacyApiFixture.simulateVoid(params);
    });

    it("should return an appropriate response containing an empty object", () => {
        expect(typeof response.data).to.equal("object");
        // debugging_request_id is always there in sandbox
        expect(Object.keys(response.data).length).to.equal(1);
        expect(response.status).to.equal(201);
    });
});
