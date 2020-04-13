import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { PrivacyListCardsRequest, PrivacyListCardsResponse } from "../../src/endpoints/get/ListCards";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyCard } from "../mocks/card";

describe("PrivacyListCardsRequest basic", () => {
    let response: PrivacyListCardsResponse;

    before("Execute Request", async () => {
        const request: PrivacyListCardsRequest = new PrivacyListCardsRequest();
        response = (await request.execute(privacyApiFixture)).data;
    });

    it("should list at least 1 page", () => {
        expect(response.page).to.be.at.least(1);
    });

    it("should return at least 1 result", () => {
        expect(response.data.length).to.be.at.least(1);
    });

    it("should say how many total entries the query returned", () => {
        expect(typeof response.total_entries).to.equal("number");
    });

    it("should return the total number of pages", () => {
        expect(typeof response.total_pages).to.equal("number");
    });

    it("should return data of type PrivacyCard", () => {
        const cardData = response.data[0];

        Object.keys(privacyCard).forEach((key) => {
            expect(cardData[key]).to.exist;
        });
    });
});
