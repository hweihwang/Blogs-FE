import BlogList from "../Modules/Blogs/Views/BlogList";
import {BlogService} from "../Modules/Blogs/Services/BlogService";
import {BlogRepository} from "../Modules/Blogs/Repositories/BlogRepository";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {KyClient} from "../Modules/Shared/HttpClients/KyClient";
import {BlogModel} from "../Modules/Blogs/Models/BlogModel";
import {ListBlogResponseDTO} from "../Modules/Blogs/DTOs/BlogResponseDTO";

const TodosIndexPage = () => {
    const CACHE_KEY = ['blogs'];

    const {data} = useQuery(CACHE_KEY);

    return <BlogList blogs={(data as ListBlogResponseDTO).data as BlogModel[]}/>;
}

export const getServerSideProps = async () => {
    const CACHE_KEY = ['blogs'];

    const queryClient = new QueryClient();

    const httpClient = KyClient.getClient();

    const blogRepo = new BlogRepository(httpClient);

    const blogService = new BlogService(blogRepo);

    await queryClient.prefetchQuery(CACHE_KEY, blogService.listBlogs);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default TodosIndexPage;
