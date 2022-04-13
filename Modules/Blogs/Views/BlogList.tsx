import BlogItem from "./BlogItem";
import {BlogModel} from "../Models/BlogModel";
import {SimpleGrid} from "@chakra-ui/react";

const BlogList = ({blogs}: { blogs: BlogModel[] }) => {
    return (
        <SimpleGrid columns={2}>
            {blogs.map((blog: BlogModel) => (
                <BlogItem blog={blog} key={blog.id}/>
            ))}
        </SimpleGrid>
    );
};

export default BlogList;
