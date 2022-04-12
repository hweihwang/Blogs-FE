import React from "react";
import {BlogModel} from "../../../Modules/Blogs/Models/BlogModel";

const BlogItem = ({blog}: { blog: BlogModel }) => {
    return (
        <div>
            <li>{blog.id} - {blog.title} - {blog.content}</li>
        </div>
    )
};

export default BlogItem;
