import {ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";

export interface ListBlogStorage {
    getList(): Promise<ListBlogResponseDTO>;
}
