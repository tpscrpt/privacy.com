import { Card } from "../../src/objects";
import { privacyFundingAccount } from "./fundingAccount";

const privacyCard: Card = {
    created: "",
    cvv: "",
    funding: privacyFundingAccount,
    exp_month: "",
    exp_year: "",
    hostname: "",
    last_four: "",
    memo: "",
    pan: "",
    spend_limit: 0,
    state: "CLOSED",
    token: "",
    type: "SINGLE_USE",
    spend_limit_duration: "ANNUALLY",
};

export { privacyCard };
