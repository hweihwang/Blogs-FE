import {BlogRepositoryInterface} from "../Repositories/BlogRepositoryInterface";
import {BlogModel} from "../Models/BlogModel";
import {DetailBlogResponseDTO, ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";

export class BlogService {
    private blogRepository: BlogRepositoryInterface;

    constructor(blogRepository: BlogRepositoryInterface) {
        this.blogRepository = blogRepository;
    }

    public listBlogs = async (): Promise<ListBlogResponseDTO> => {
        try {
            return this.blogRepository.getList();
        } catch (e) {
            throw e;
        }
    }

    public async getBlogById(id: number): Promise<DetailBlogResponseDTO> {
        try {
            return this.blogRepository.getById(id);
        } catch (e) {
            throw e;
        }
    }
}
