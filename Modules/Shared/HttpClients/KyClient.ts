import ky from "ky-universal";
import {KyInstance} from "ky/distribution/types/ky";

export class KyClient {
    private static client: KyInstance;

    private static prefixUrl: string = 'http://localhost:3000/api/v1/';

    private static headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

    public static getClient(): KyInstance {
        if (!this.client) {
            this.client = ky.create({
                prefixUrl: this.prefixUrl,
                headers: this.headers,
            });
        }

        return this.client;
    }
}
