export class BlogModel {
    id: number;
    title: string;
    description: string;
    content: string;
    createdById: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, title: string, description: string, content: string, createdById: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.content = content;
        this.createdById = createdById;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
