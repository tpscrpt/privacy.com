import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { CreateCardParams, CreateCardResponse, Card } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyCard } from "../mocks/card";

describe("CreateCard basic", () => {
    let response: CreateCardResponse;

    before("Execute Request", async () => {
        const params: CreateCardParams = {
            type: "UNLOCKED",
        };
        response = await privacyApiFixture.createCard(params);
    });

    it("should return an appropriate response containing a valid Card type object", () => {
        const cardData: Card = response.data;
        Object.keys(privacyCard).forEach((key) => expect(cardData[key]).to.exist);
    });
});
