import {BlogModel} from "../Models/BlogModel";

export class ListBlogResponseDTO {
    data: BlogModel[];
    paging: { page: number, limit: number, total: number };
    filter: {};

    constructor(data: BlogModel[], paging: { page: number; limit: number; total: number; }, filter: {}) {
        this.data = data;
        this.paging = paging;
        this.filter = filter;
    }
}

export class DetailBlogResponseDTO {
    data: BlogModel;

    constructor(data: BlogModel) {
        this.data = data;
    }
}
