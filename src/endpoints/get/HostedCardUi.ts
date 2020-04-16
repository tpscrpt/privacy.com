import { Response } from "..";
import { PrivacyApi } from "../..";
import { EmbedRequest } from "../../objects";
import { createHmac } from "../../utils";
import { GetEndpoint } from ".";

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
export class HostedCardUiRequest extends GetEndpoint {
    path: string = "/embed/card";
    params: HostedCardUiProxyParams;
    originalParams: HostedCardUiParams;

    constructor(params: HostedCardUiParams) {
        super();
        this.originalParams = params;
    }

    /**
     * Formats parameters for the request, i.e. creates an hmac with the API key and serializes the embed_request object
     * @param manager PrivacyApi from which to extract the API Key
     */
    public beforeExecute(manager: PrivacyApi): void {
        /**
         * @dev JSON must be encoded alphabetically, not too bad for not-deeply-nested objects like this one
         */
        const data: EmbedRequest = {
            css: this.originalParams.embed_request.css,
            expiration: this.originalParams.embed_request.expiration,
            token: this.originalParams.embed_request.token,
        };

        this.params = {
            embed_request: Buffer.from(JSON.stringify(data)).toString("base64"),
            hmac: createHmac(manager.apiKey, data),
        };
    }
}

/**
 * Opaque parameters for {@link HostedCardUiRequest}
 */
export type HostedCardUiParams = {
    embed_request: EmbedRequest;
};

/**
 * Acutal parameters for {@link HostedCardUiRequest}
 */
type HostedCardUiProxyParams = {
    /** A base64 encoded JSON string of an EmbedRequest to specify which card to load */
    embed_request: string;
    /** SHA2 HMAC of the embed_request JSON string with base64 digest */
    hmac: string;
};

export type HostedCardUiResponse = Response<string>;
