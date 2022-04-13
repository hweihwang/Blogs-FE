import BlogList from "../../Modules/Blogs/Views/BlogList";
import {BlogService} from "../../Modules/Blogs/Services/BlogService";
import {BlogRepository} from "../../Modules/Blogs/Repositories/BlogRepository";
import {QueryClientProvider, useQuery} from "react-query";
import {useContext} from "react";

const TodosIndexPage = () => {
    const blogRepo = new BlogRepository();

    const blogService = new BlogService(blogRepo);

    const {data} = useQuery('blogs/list', blogService.listBLogs);

    console.log(data);

    return <BlogList blogs={listBlogs}/>;
}

export async function getServerSideProps(context: any) {
    console.log(context);

    const blogRepo = new BlogRepository(context.client);

    const blogService = new BlogService(blogRepo);

    await blogService.prefetchListBLogs();

    return {
        props: {},
    }
}

export default TodosIndexPage;
