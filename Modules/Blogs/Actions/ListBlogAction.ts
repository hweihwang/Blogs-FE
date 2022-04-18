import {ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";
import {ListBlogStorage} from "../Storages/ListBlogStorage";
import {Storage} from "../Storages/Storage";

export class ListBlogAction {
    private blogRepository: ListBlogStorage;

    private static action: ListBlogAction;

    private constructor(blogRepository?: ListBlogStorage) {
        if(blogRepository) {
            this.blogRepository = blogRepository;
        } else {
            this.blogRepository = Storage.getStorage();
        }
    }

    public static getAction(blogRepository?: ListBlogStorage): ListBlogAction {
        if(!this.action) {
            this.action = new ListBlogAction(blogRepository);
        }
        return this.action;
    }

    public listBlogs = async (): Promise<ListBlogResponseDTO> => {
        try {
            return this.blogRepository.getList();
        } catch (e) {
            throw e;
        }
    }
}
