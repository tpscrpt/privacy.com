import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacyUpdateCardParams,
    PrivacyUpdateCardRequest,
    PrivacyUpdateCardResponse,
} from "../../src/endpoints/put/UpdateCard";
import { PrivacyCard } from "../../src/objects";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyCardFixture } from "../fixtures/card";

describe("UpdateCard basic", () => {
    let response: PrivacyUpdateCardResponse;

    before("Execute Request", async () => {
        const params: PrivacyUpdateCardParams = {
            card_token: privacyCardFixture.token,
            memo: "updated",
        };
        const request = new PrivacyUpdateCardRequest(params);
        try {
            response = (await request.execute(privacyApiFixture)).data;
        } catch (error) {
            console.log(error);
        }
    });

    it("should return an appropriate response containing a valid PrivacyCard type object with changed memo", () => {
        const cardData: PrivacyCard = response;
        Object.keys(privacyCardFixture).forEach((key) => expect(cardData[key]).to.exist);
        expect(cardData.memo).to.equal("updated");
    });
});
