import { Endpoint } from "../";

export abstract class PostEndpoint extends Endpoint {
    method: string = "POST";
    path: string;
    params: object;
}

/**
 * A unique token to reference this transaction with later calls to void or clear the authorization.
 * @remarks only used in Simulation requests
 */
export type TokenData = {
    token: string;
};
