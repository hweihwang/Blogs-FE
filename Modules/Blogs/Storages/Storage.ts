import {KyInstance} from "ky/distribution/types/ky";
import {DetailBlogResponseDTO, ListBlogResponseDTO} from "../DTOs/BlogResponseDTO";
import {KyClient} from "../../Shared/HttpClients/KyClient";
import {GetBlogStorage} from "./GetBlogStorage";
import {ListBlogStorage} from "./ListBlogStorage";

export class Storage implements GetBlogStorage, ListBlogStorage {
    private db: KyInstance;

    private static storage: Storage;

    private constructor(db?: KyInstance) {
        if (db) {
            this.db = db;
        } else {
            this.db = KyClient.getClient();
        }
    }

    public static getStorage(db?: KyInstance): Storage {
        if (!Storage.storage) {
            Storage.storage = new Storage(db);
        }

        return Storage.storage;
    }

    public async getList(): Promise<ListBlogResponseDTO> {
        return this.db.post('blogs/list', {json: {}}).json();
    }

    public async getById(id: number): Promise<DetailBlogResponseDTO> {
        return this.db.get(`blogs/${id}`).json();
    }
}