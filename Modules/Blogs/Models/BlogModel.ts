export class BlogModel {
    id: number;
    title: string;
    description: string;
    content: string;
    created_by_id: number;
    status: number;
    created_at: Date;
    updated_at: Date;

    constructor(
        id: number,
        title: string,
        description: string,
        content: string,
        created_by_id: number,
        status: number,
        created_at: Date,
        updated_at: Date
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.created_by_id = created_by_id;
        this.status = status;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
