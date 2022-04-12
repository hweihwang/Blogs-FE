import {BlogRepositoryInterface} from "./BlogRepositoryInterface";
import {BaseRepository} from "../../Shared/Repositories/BaseRepository";

export class BlogRepository extends BaseRepository implements BlogRepositoryInterface {
    public async getList(): Promise<any> {
        await this.queryClient.prefetchQuery(['LIST_BLOGS'],
            () => this.db.post('blogs/list', {json: {}}).json())

        return this.resolveDataFromQueryClient();
    }
}
