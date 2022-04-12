import ky from 'ky-universal';
import {KyInstance} from "ky/distribution/types/ky";

export class BaseRepository {
    protected readonly db: KyInstance;

    constructor() {
        this.db = ky;
    }
}
