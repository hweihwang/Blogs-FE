import {BlogRepositoryInterface} from "./BlogRepositoryInterface";
import {BaseRepository} from "../../Shared/Repositories/BaseRepository";
import {DetailBlogResponseDTO, ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";

export class BlogRepository extends BaseRepository implements BlogRepositoryInterface {
    public async getList(): Promise<ListBlogResponseDTO> {
        return this.db.post('blogs/list', {json: {}}).json();
    }

    public async getById(id: number): Promise<DetailBlogResponseDTO> {
        return this.db.get(`blogs/${id}`).json();
    }
}
