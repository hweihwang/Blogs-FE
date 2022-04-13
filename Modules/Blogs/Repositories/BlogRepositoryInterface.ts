export interface BlogRepositoryInterface {
    getList(): Promise<any>;

    prefetchGetList(): Promise<any>;
}
