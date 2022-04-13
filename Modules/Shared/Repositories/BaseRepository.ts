import ky from 'ky-universal';
import {KyInstance} from "ky/distribution/types/ky";
import {dehydrate, QueryClient} from "react-query";

export class BaseRepository {
    protected readonly db: KyInstance;
    protected readonly queryClient: QueryClient;

    constructor(queryClient: QueryClient) {
        this.db = ky.create({
            prefixUrl: 'http://localhost:3000/api/v1/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        this.queryClient = queryClient;
    }

    protected async resolveDataFromQueryClient(): Promise<any> {
        return dehydrate(this.queryClient).queries[0].state.data
    }
}
