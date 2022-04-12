import {BlogModel} from "../Models/BlogModel";

export interface BlogRepositoryInterface {
    getAll(): Array<BlogModel>;

    testReactQuery(): any;
}

