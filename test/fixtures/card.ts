import { Card } from "../../src/objects";

export const privacyCardFixture: Card = {
    created: "2020-04-12T23:31:55Z",
    cvv: "424",
    exp_month: "04",
    exp_year: "2026",
    funding: {
        account_name: "",
        created: "2020-04-12 23:30:24",
        last_four: "4321",
        nickname: "",
        state: "ENABLED",
        token: "9969f054-44b9-4032-b3a8-986e3bfc6b49",
        type: "DEPOSITORY_CHECKING",
    },
    hostname: "",
    last_four: "4993",
    memo: "UNLOCKED card",
    pan: "4111111197074993",
    spend_limit: 0,
    spend_limit_duration: "TRANSACTION",
    state: "OPEN",
    token: "9babaf79-655f-4557-894d-54ed667e7361",
    type: "UNLOCKED",
};
