import { PrivacyEndpoint } from "../";

export abstract class PrivacyPutEndpoint<ResponseT> extends PrivacyEndpoint<ResponseT> {
    method: string = "PUT";
    path: string;
    params: object;
}
