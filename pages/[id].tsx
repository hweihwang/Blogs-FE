import {useRouter} from "next/router";
import BlogItem from "../Modules/Blogs/Views/BlogItem";
import {dehydrate, QueryClient, useQuery} from "react-query";
import {DetailBlogResponseDTO} from "../Modules/Blogs/DTOs/BlogResponseDTO";
import {GetBlogAction} from "../Modules/Blogs/Actions/GetBlogAction";

export default () => {
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

    const getBlogAction = GetBlogAction.getAction();

    await queryClient.prefetchQuery(CACHE_KEY, () => getBlogAction.getBlogById(id));

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
