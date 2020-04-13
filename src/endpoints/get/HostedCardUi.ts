import { PrivacyApiManager } from "../..";
import { PrivacyEmbedRequest } from "../../objects";
import { createPrivacyHmac } from "../../utils";
import { PrivacyGetEndpoint } from ".";

/**
 * Get iframe data to display card details
 * @remarks The iframe body will provide consistent markup of the following form.
 * It is up to the API client to provide css styles for these elements in the EmbedRequest.
 * ```html
 * <div id="card">
 *   <div id="pan">{PAN}</div>
 *   <div id="expiry">
 *     <span id="month">{expMonth}</span>
 *     <span id="separator">/</span>
 *     <span id="year">{expYear}</span>
 *   </div>
 *   <div id="cvv">{CVV}</div>
 * </div>
 * ```
 */
export class PrivacyHostedCardUiRequest extends PrivacyGetEndpoint<PrivacyHostedCardUiResponse> {
    path: string = "/embed/card";
    params: PrivacyHostedCardUiProxyParams;
    originalParams: PrivacyHostedCardUiParams;

    constructor(params: PrivacyHostedCardUiParams) {
        super();
        this.originalParams = params;
    }

    /**
     * Formats parameters for the request, i.e. creates an hmac with the API key and serializes the embed_request object
     * @param manager PrivacyApiManager from which to extract the API Key
     */
    public beforeExecute(manager: PrivacyApiManager): void {
        /**
         * @dev JSON must be encoded alphabetically, not too bad for not-deeply-nested objects like this one
         */
        const data: PrivacyEmbedRequest = {
            css: this.originalParams.embed_request.css,
            expiration: this.originalParams.embed_request.expiration,
            token: this.originalParams.embed_request.token,
        };

        this.params = {
            embed_request: Buffer.from(JSON.stringify(data)).toString("base64"),
            hmac: createPrivacyHmac(manager.apiKey, data),
        };
    }
}

/**
 * Opaque parameters for {@link PrivacyHostedCardUiRequest}
 */
export type PrivacyHostedCardUiParams = {
    embed_request: PrivacyEmbedRequest;
};

/**
 * Acutal parameters for {@link PrivacyHostedCardUiRequest}
 */
type PrivacyHostedCardUiProxyParams = {
    /** A base64 encoded JSON string of an EmbedRequest to specify which card to load */
    embed_request: string;
    /** SHA2 HMAC of the embed_request JSON string with base64 digest */
    hmac: string;
};

export type PrivacyHostedCardUiResponse = string;
