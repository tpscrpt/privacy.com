import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import {
    PrivacyListTransactionsRequest,
    PrivacyListTransactionsResponse,
} from "../../src/endpoints/get/ListTransactions";
import { PrivacyTransaction } from "../../src/objects";
import { privacyApiFixture } from "../fixtures/apiManager";
import { privacyTransaction } from "../mocks/transaction";

describe("ListTransactions basic", () => {
    let response: PrivacyListTransactionsResponse;

    before("Execute Request", async () => {
        const request = new PrivacyListTransactionsRequest();
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

    it("should return an array of results with at least 1 member which matches PrivacyTransaction type", () => {
        expect(response.data.length).to.be.at.least(1);

        const transactionData: PrivacyTransaction = response.data[0];
        Object.keys(privacyTransaction).forEach((key) => expect(transactionData[key]).to.exist);
    });
});
