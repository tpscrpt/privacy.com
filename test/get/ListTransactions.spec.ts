import "mocha";

import { expect } from "chai";
import { before } from "mocha";

import { ListTransactionsResponse, Transaction } from "../../src";
import { privacyApiFixture } from "../fixtures/privacyApi";
import { privacyTransaction } from "../mocks/transaction";

describe("ListTransactions basic", () => {
    let response: ListTransactionsResponse;

    before("Execute Request", async () => {
        response = await privacyApiFixture.listTransactions();
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

    it("should return an array of results with at least 1 member which matches Transaction type", () => {
        expect(response.data.data.length).to.be.at.least(1);

        const transactionData: Transaction = response.data.data[0];
        Object.keys(privacyTransaction).forEach((key) => expect(transactionData[key]).to.exist);
    });
});
