import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { UpdateCardParams, UpdateCardResponse, Card } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyCardFixture } from "../fixtures/card";

describe("UpdateCard basic", () => {
    let response: UpdateCardResponse;

    before("Execute Request", async () => {
        const params: UpdateCardParams = {
            card_token: privacyCardFixture.token,
            memo: "updated",
        };
        response = await privacyApiFixture.updateCard(params);
    });

    it("should return an appropriate response containing a valid Card type object with changed memo", () => {
        const cardData: Card = response.data;
        Object.keys(privacyCardFixture).forEach((key) => expect(cardData[key]).to.exist);
        expect(cardData.memo).to.equal("updated");
    });
});
