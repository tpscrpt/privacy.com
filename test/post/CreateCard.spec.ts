import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacyCreateCardParams,
    PrivacyCreateCardRequest,
    PrivacyCreateCardResponse,
} from "../../src/endpoints/post/CreateCard";
import { PrivacyCard } from "../../src/objects";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyCard } from "../mocks/card";

describe("CreateCard basic", () => {
    let response: PrivacyCreateCardResponse;

    before("Execute Request", async () => {
        const params: PrivacyCreateCardParams = {
            type: "UNLOCKED",
        };
        const request = new PrivacyCreateCardRequest(params);
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should return an appropriate response containing a valid PrivacyCard type object", () => {
        const cardData: PrivacyCard = response;
        Object.keys(privacyCard).forEach((key) => expect(cardData[key]).to.exist);
    });
});
