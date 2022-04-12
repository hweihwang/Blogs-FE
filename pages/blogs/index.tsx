import {NextPage} from "next";
import BlogList from "../../components/blogs/BlogList";
import {useEffect, useState} from "react";
import {BlogModel} from "../../Modules/Blogs/Models/BlogModel";
import {BlogService} from "../../Modules/Blogs/Services/BlogService";
import {BlogRepository} from "../../Modules/Blogs/Repositories/BlogRepository";
import {dehydrate, QueryClient} from "react-query";

const TodosIndexPage: NextPage = ({dehydratedState}) => {
    // const [blogs, setBlogs] = useState<Array<BlogModel>>([]);
    //
    // useEffect(() => {
    //     const blogRepo = new BlogRepository();
    //
    //     const blogService = new BlogService(blogRepo);
    //
    //     setBlogs(
    //         blogService.getAllBlogs()
    //     );
    // }, [blogs]);


    return (
        <div>
            {/*<BlogList blogs={blogs}/>*/}
        </div>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient()

    const blogRepo = new BlogRepository();

    const blogService = new BlogService(blogRepo);

    await queryClient.prefetchQuery(['posts'], () => blogService.testReactQuery())

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default TodosIndexPage;
