import {BlogModel} from "../Models/BlogModel";
import {SimpleGrid} from "@chakra-ui/react";
import BlogItem from "./BlogItem";

export default ({blogs}: { blogs: BlogModel[] }) => {
    return (
        <SimpleGrid columns={2} spacing={5}>
            {blogs.map((blog: BlogModel) => (
                <BlogItem blog={blog} key={blog.id}/>
            ))}
        </SimpleGrid>
    );
};
