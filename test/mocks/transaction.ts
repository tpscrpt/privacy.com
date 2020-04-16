import { Transaction } from "../../src/objects";
import { privacyCard } from "./card";
import { privacyEvent } from "./event";
import { privacyMerchant } from "./merchant";

export const privacyTransaction: Transaction = {
    amount: 0,
    card: privacyCard,
    created: "",
    events: privacyEvent,
    funding: {
        amount: 0,
        token: "",
        type: "PROMO",
    },
    merchant: privacyMerchant,
    result: "APPROVED",
    settled_amount: 0,
    status: "SETTLED",
    token: "",
};
