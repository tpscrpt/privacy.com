import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { ListCardsResponse } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyCard } from "../mocks/card";

describe("ListCards basic", () => {
    let response: ListCardsResponse;

    before("Execute Request", async () => {
        response = await privacyApiFixture.listCards();
    });

    it("should list at least 1 page", () => {
        expect(response.data.page).to.be.at.least(1);
    });

    it("should return at least 1 result", () => {
        expect(response.data.data.length).to.be.at.least(1);
    });

    it("should say how many total entries the query returned", () => {
        expect(typeof response.data.total_entries).to.equal("number");
    });

    it("should return the total number of pages", () => {
        expect(typeof response.data.total_pages).to.equal("number");
    });

    it("should return data of type Card", () => {
        const cardData = response.data.data[0];

        Object.keys(privacyCard).forEach((key) => {
            expect(cardData[key]).to.exist;
        });
    });
});
