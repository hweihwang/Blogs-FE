export class BaseRepository {
    protected readonly db: any;

    constructor(db: any) {
        this.db = db;
    }
}
