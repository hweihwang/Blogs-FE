import {BlogModel} from "../Models/BlogModel";
import {BlogRepositoryInterface} from "../Repositories/BlogRepositoryInterface";

export class BlogService {
    private blogRepository: BlogRepositoryInterface;

    constructor(blogRepository: BlogRepositoryInterface) {
        this.blogRepository = blogRepository;
    }

    public getAllBlogs(): Array<BlogModel> {
        return this.blogRepository.getAll();
    }

    public async testReactQuery(): Promise<any> {
        return await this.blogRepository.testReactQuery();
    }
}
