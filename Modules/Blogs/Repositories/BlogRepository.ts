import {BlogRepositoryInterface} from "./BlogRepositoryInterface";
import {BaseRepository} from "../../Shared/Repositories/BaseRepository";

export class BlogRepository extends BaseRepository implements BlogRepositoryInterface {
    public async getList(): Promise<any> {
        return this.db.post('blogs/list', {json: {}}).json();
    }

    public async prefetchGetList(): Promise<any> {
        return this.queryClient.prefetchQuery('blogs/list', this.getList);
    }
}
