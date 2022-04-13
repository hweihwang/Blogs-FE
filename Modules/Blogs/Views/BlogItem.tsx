import React from "react";
import {BlogModel} from "../Models/BlogModel";
import {Box, Text} from "@chakra-ui/react";

const BlogItem = ({blog}: { blog: BlogModel }) => {
    return (
        <Box mt={10}>
            <Text>ID: {blog.id}</Text>
            <Text>Title: {blog.title}</Text>
            <Text>Description: {blog.description}</Text>
            <Text>Content: {blog.content}</Text>
            <Text>Created by: {blog.createdById}</Text>
            <Text>Created at: {blog.createdAt}</Text>
            <Text>Updated at{blog.updatedAt}</Text>
        </Box>
    )
};

export default BlogItem;
