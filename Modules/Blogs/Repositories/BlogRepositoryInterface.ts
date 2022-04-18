import {DetailBlogResponseDTO, ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";

export interface BlogRepositoryInterface {
    getList(): Promise<ListBlogResponseDTO>;

    getById(id: number): Promise<DetailBlogResponseDTO>;
}
