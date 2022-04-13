import {BlogRepositoryInterface} from "../Repositories/BlogRepositoryInterface";

export class BlogService {
    private blogRepository: BlogRepositoryInterface;

    constructor(blogRepository: BlogRepositoryInterface) {
        this.blogRepository = blogRepository;
    }

    public async listBLogs(): Promise<any> {
        return this.blogRepository.getList();
    }

    public async prefetchListBLogs(): Promise<any> {
        return this.blogRepository.prefetchGetList();
    }
}
