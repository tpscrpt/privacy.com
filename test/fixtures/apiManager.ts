import { PrivacyApi } from "../../src";

const privacyApiFixture = new PrivacyApi(process.env.PRIVACY_TEST_API_KEY);

export { privacyApiFixture };
