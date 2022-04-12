import {BlogRepositoryInterface} from "../Repositories/BlogRepositoryInterface";

export class BlogService {
    private blogRepository: BlogRepositoryInterface;

    constructor(blogRepository: BlogRepositoryInterface) {
        this.blogRepository = blogRepository;
    }

    public async listBLogs(): Promise<any> {
        return await this.blogRepository.getList();
    }
}
