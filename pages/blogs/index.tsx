import BlogList from "../../Modules/Blogs/Views/BlogList";
import {BlogModel} from "../../Modules/Blogs/Models/BlogModel";
import {BlogService} from "../../Modules/Blogs/Services/BlogService";
import {BlogRepository} from "../../Modules/Blogs/Repositories/BlogRepository";

const TodosIndexPage = ({listBlogs}: { listBlogs: BlogModel[] }) => {
    return <BlogList blogs={listBlogs}/>;
}

export async function getServerSideProps() {
    const blogRepo = new BlogRepository();

    const blogService = new BlogService(blogRepo);

    return {
        props: {
            listBlogs: (await blogService.listBLogs()).data,
        },
    }
}

export default TodosIndexPage;
