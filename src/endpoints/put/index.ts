import { Endpoint } from "../";

export abstract class PutEndpoint extends Endpoint {
    method: string = "PUT";
    path: string;
    params: object;
}
