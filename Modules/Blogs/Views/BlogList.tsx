import BlogItem from "./BlogItem";
import {BlogModel} from "../Models/BlogModel";

const BlogList = ({blogs}: { blogs: BlogModel[] }) => {
    return (
        <div className={'container mx-auto grid grid-cols-4'}>
            {blogs.map((blog: BlogModel) => (
                <BlogItem blog={blog} key={blog.id}/>
            ))}
        </div>
    );
};

export default BlogList;
