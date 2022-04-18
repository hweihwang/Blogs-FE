import BlogList from "../Modules/Blogs/Views/BlogList";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {BlogModel} from "../Modules/Blogs/Models/BlogModel";
import {ListBlogResponseDTO} from "../Modules/Blogs/DTOs/BlogResponseDTO";
import {ListBlogAction} from "../Modules/Blogs/Actions/ListBlogAction";

export default () => {
    const CACHE_KEY = ['blogs'];

    const {data} = useQuery(CACHE_KEY);

    return <BlogList blogs={(data as ListBlogResponseDTO).data as BlogModel[]}/>;
}

export const getServerSideProps = async () => {
    const CACHE_KEY = ['blogs'];

    const queryClient = new QueryClient();

    const listBlogAction = ListBlogAction.getAction();

    await queryClient.prefetchQuery(CACHE_KEY, listBlogAction.listBlogs);

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
