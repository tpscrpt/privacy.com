import * as crypto from "crypto";

export const createPrivacyHmac = (apiKey: string, data: object): string =>
    crypto.createHmac("sha256", apiKey).update(JSON.stringify(data)).digest("base64");
