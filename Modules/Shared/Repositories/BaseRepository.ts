import ky from 'ky-universal';
import {KyInstance} from "ky/distribution/types/ky";
import {dehydrate, QueryClient} from "react-query";

export class BaseRepository {
    protected readonly db: KyInstance;
    protected readonly queryClient: QueryClient;

    constructor() {
        this.db = ky.create({
            prefixUrl: 'http://localhost:3000/api/v1/',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        this.queryClient = new QueryClient();
    }

    protected async resolveDataFromQueryClient(): Promise<any> {
        return await dehydrate(this.queryClient).queries[0].state.data
    }
}
