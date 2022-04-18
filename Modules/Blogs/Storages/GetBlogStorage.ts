import {DetailBlogResponseDTO} from "../DTOs/BlogResponseDTO";

export interface GetBlogStorage {
    getById(id: number): Promise<DetailBlogResponseDTO>;
}
