import {BlogRepositoryInterface} from "./BlogRepositoryInterface";
import {BlogModel} from "../Models/BlogModel";
import {BaseRepository} from "../../Shared/Repositories/BaseRepository";

export class BlogRepository extends BaseRepository implements BlogRepositoryInterface {
    private blogs: Array<BlogModel> = [
        new BlogModel(1, 'Blog 1', 'This is the first blog'),
        new BlogModel(2, 'Blog 2', 'This is the second blog'),
        new BlogModel(3, 'Blog 3', 'This is the third blog'),
        new BlogModel(4, 'Blog 4', 'This is the fourth blog'),
        new BlogModel(5, 'Blog 5', 'This is the fifth blog'),
        new BlogModel(6, 'Blog 6', 'This is the sixth blog'),
        new BlogModel(7, 'Blog 7', 'This is the seventh blog'),
        new BlogModel(8, 'Blog 8', 'This is the eighth blog'),
        new BlogModel(9, 'Blog 9', 'This is the ninth blog'),
        new BlogModel(10, 'Blog 10', 'This is the tenth blog'),
    ];

    public getAll(): Array<BlogModel> {
        return this.blogs;
    }

    public async testReactQuery(): Promise<any> {
        return await this.db('https://jsonplaceholder.typicode.com/posts').json();
    }
}
