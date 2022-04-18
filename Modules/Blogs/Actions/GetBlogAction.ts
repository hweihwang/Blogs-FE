import {DetailBlogResponseDTO, ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";
import {ListBlogStorage} from "../Storages/ListBlogStorage";
import {Storage} from "../Storages/Storage";
import {GetBlogStorage} from "../Storages/GetBlogStorage";

export class GetBlogAction {
    private blogRepository: GetBlogStorage;

    private static action: GetBlogAction;

    private constructor(blogRepository?: GetBlogStorage) {
        if(blogRepository) {
            this.blogRepository = blogRepository;
        } else {
            this.blogRepository = Storage.getStorage();
        }
    }

    public static getAction(blogRepository?: GetBlogStorage): GetBlogAction {
        if(!GetBlogAction.action) {
            GetBlogAction.action = new GetBlogAction(blogRepository);
        }
        return GetBlogAction.action;
    }

    public async getBlogById(id: number): Promise<DetailBlogResponseDTO> {
        try {
            return this.blogRepository.getById(id);
        } catch (e) {
            throw e;
        }
    }
}
