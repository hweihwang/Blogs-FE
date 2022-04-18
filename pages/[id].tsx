import {useRouter} from "next/router";
import {BlogRepository} from "../Modules/Blogs/Repositories/BlogRepository";
import {BlogService} from "../Modules/Blogs/Services/BlogService";
import BlogItem from "../Modules/Blogs/Views/BlogItem";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {KyClient} from "../Modules/Shared/HttpClients/KyClient";
import {DetailBlogResponseDTO} from "../Modules/Blogs/DTOs/BlogResponseDTO";

const TodoDetailPage = () => {
    const router = useRouter();

    const {id} = router.query;

    const CACHE_KEY = ['blogs', id];

    const {data} = useQuery(CACHE_KEY);

    return <BlogItem blog={(data as DetailBlogResponseDTO).data}></BlogItem>;
};

export const getServerSideProps = async (context: any) => {
    const {id} = context.query;

    const CACHE_KEY = ['blogs', id];

    const queryClient = new QueryClient();

    const httpClient = KyClient.getClient();

    const blogRepo = new BlogRepository(httpClient);

    const blogService = new BlogService(blogRepo);

    await queryClient.prefetchQuery(CACHE_KEY, () => blogService.getBlogById(id));

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default TodoDetailPage;
