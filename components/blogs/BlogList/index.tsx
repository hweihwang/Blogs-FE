import {Key, useState} from "react";
import BlogItem from "../BlogItem";
import {BlogModel} from "../../../Modules/Blogs/Models/BlogModel";

const BlogList = ({blogs}: { blogs: Array<BlogModel> }) => {
    return (
        <div>
            <ul>
                {blogs.map((blog: BlogModel) => (
                    <BlogItem blog={blog} key={blog.id}/>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
