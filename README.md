[![Coverage Status](https://coveralls.io/repos/github/JeremiGendron/privacy.com/badge.svg?branch=master)](https://coveralls.io/github/JeremiGendron/privacy.com?branch=master)
[![Build Status](https://travis-ci.com/JeremiGendron/privacy.com.svg?branch=master)](https://travis-ci.com/JeremiGendron/privacy.com.svg?branch=master)

# Privacy.com API

This library provides you with all you need to make proper calls to the Privacy.com API from a node environment. It is written in TypeScript and only has a dependency on Axios, so its usage is simple and straightforward.

## Installation

using npm:

```sh
npm i --save privacy.com
```

or, using yarn:

```sh
yarn add privacy.com
```

## Usage

With typescript:

```ts
import { PrivacyApi } from "privacy.com";
// Importing the request's Params type can help you with intellisense, but is optional
import { CreateCardParams } from "privacy.com";
// If you want your caught errors to be typed, import AxiosError
import { AxiosError } from "axios";

const privacyApi = new PrivacyApi("API_KEY", true /* sandbox (default) */);

const params: CreateCardParams = {
    type: "UNLOCKED",
    memo: "friendly identifier",
    spend_limit: 1000,
    spend_limit_duration: "MONTHLY",
};

// Using async/await
try {
    const createCardResponse = await privacyApi.createCard(params);
    console.log(createCardResponse.data);
} catch (e) {
    const code = e.response.status;
    const message = e.response.data;
    console.log(code, message);
}

// Using then/catch
privacyApi
    .createCard(params)
    .then((createCardResponse) => {
        console.log(createCardResponse.data);
    })
    .catch((e) => {
        const code = e.response.status;
        const message = e.response.data;
        console.log(code, message);
    });
```

With JavaScript:

```js
import { PrivacyApi } from "privacy.com";

const privacyApi = new PrivacyApi("API_KEY", true /* sandbox (default) */);

const params = {
    type: "UNLOCKED",
    memo: "friendly identifier",
    spend_limit: 1000,
    spend_limit_duration: "MONTHLY",
};

// Using async/await
try {
    const createCardResponse = await privacyApi.createCard(params);
    console.log(createCardResponse.data);
} catch (e) {
    const code = e.response.status;
    const message = e.response.data;
    console.log(code, message);
}

// Using then/catch
privacyApi
    .createCard(params)
    .then((createCardResponse) => {
        console.log(createCardResponse.data);
    })
    .catch((e) => {
        const code = e.response.status;
        const message = e.response.data;
        console.log(code, message);
    });
```

## Endpoints

All of the API endpoints from the Privacy.com API are supported.

-   `createCard(params: CreateCardParams)`: Create a new card for the privacy account
-   `addBank(params: AddBankParams)`: Adds a bank account as a funding source using routing and account numbers
-   `listCards(params?: ListCardsParams)`: List cards associated with the privacy account
-   `listFundingAccounts(params?: ListFundingAccountsParams)`: List all the funding accounts associated with the privacy account
-   `listTransactions(params?: ListTransactionsParams)`: List transactions associated with the privacy account or a specific card
-   `hostedCardUi(params: HostedCardUiParams)`: Get iframe data to display card details
-   `updateCard(params: UpdateCardParams)`: Update a card by its token for the privacy account
-   `simulateAuthorization(params: SimulateAuthorizationParams)`: Simulates an authorization request from the payment network as if it came from a merchant acquirer
-   `simulateVoid(params: SimulateVoidParams)`: Voids an existing, uncleared (aka pending) authorization
-   `simulateClearing(params: SimulateClearingParams)`: Clears an existing authorization. After this event, the transaction is no longer pending
-   `simulateReturn(params: SimulateReturnParams)`: Returns (aka refunds) an amount back to a card. Returns are cleared immediately and do not spend time in a "pending" state
