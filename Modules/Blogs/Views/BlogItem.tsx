import React from "react";
import {BlogModel} from "../Models/BlogModel";

const BlogItem = ({blog}: { blog: BlogModel }) => {
    return (
        <div className={'col-auto list-none'}>
            <li>ID: {blog.id}</li>
            <li>Title: {blog.title}</li>
            <li>Description: {blog.description}</li>
            <li>Content: {blog.content}</li>
            <li>Created by: {blog.createdById}</li>
            <li>Created at: {blog.createdAt}</li>
            <li>Updated at{blog.updatedAt}</li>
        </div>
    )
};

export default BlogItem;
